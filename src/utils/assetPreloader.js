/**
 * Preloading and in-memory deduplication for route chunks and image assets.
 */

export const projectLoaders = {
  '1': () => import('../projects/Qualoto/Qualoto.jsx'),
  '2': () => import('../projects/CNN/cnn.jsx'),
  '3': () => import('../projects/PerformVision/PerformVision.jsx'),
  '4': () => import('../projects/NetCards/NetCards.jsx'),
  '5': () => import('../projects/TodoList/TodoList.jsx'),
  '6': () => import('../projects/Medicial/Medicial.jsx'),
};

const projectImageFolders = {
  '1': '/projects/Qualoto/',
  '2': '/projects/CNN/',
  '3': '/projects/PerformVision/',
  '4': '/projects/NetCards/',
  '5': '/projects/TodoList/',
  '6': '/projects/Medicial/',
};

// Collects resolved URLs for all images at build time without executing component code.
const imageModules = import.meta.glob(
  [
    '../images/*.{png,jpg,jpeg,webp,gif}',
    '../projects/*/images/*.{png,jpg,jpeg,webp,gif}',
  ],
  { eager: true, import: 'default' }
);

const preloadedUrls = new Set();
const prefetchedProjects = new Set();
let idlePreloadScheduled = false;

/**
 * Preloads a single image URL once with async decoding.
 */
export function preloadImage(url) {
  if (!url || preloadedUrls.has(url)) {
    return Promise.resolve();
  }
  preloadedUrls.add(url);

  return new Promise((resolve) => {
    const img = new Image();
    img.decoding = 'async';
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = url;
  });
}

/**
 * Prefetches a project's JS chunk and its images before navigation.
 */
export function prefetchProject(id) {
  const loader = projectLoaders[id];
  if (loader && !prefetchedProjects.has(id)) {
    prefetchedProjects.add(id);
    loader().catch(() => {
      prefetchedProjects.delete(id);
    });
  }

  const folder = projectImageFolders[id];
  if (!folder) return;

  for (const [modulePath, url] of Object.entries(imageModules)) {
    if (modulePath.includes(folder)) {
      preloadImage(url);
    }
  }
}

/**
 * Warms route chunks and image assets during browser idle time in small batches.
 */
export function scheduleIdleAssetPreload() {
  if (idlePreloadScheduled || typeof window === 'undefined') return;
  idlePreloadScheduled = true;

  const schedule =
    typeof window.requestIdleCallback === 'function'
      ? (cb) => window.requestIdleCallback(cb, { timeout: 2000 })
      : (cb) => window.setTimeout(cb, 300);

  const urls = Object.values(imageModules);
  const chunkLoaders = Object.entries(projectLoaders);

  schedule(async () => {
    // Warm route chunks first so Suspense transitions are instant.
    for (const [id, loader] of chunkLoaders) {
      if (!prefetchedProjects.has(id)) {
        prefetchedProjects.add(id);
        loader().catch(() => {
          prefetchedProjects.delete(id);
        });
      }
    }

    // Preload images in small batches to avoid saturating bandwidth or main thread.
    const batchSize = 3;
    for (let i = 0; i < urls.length; i += batchSize) {
      const batch = urls.slice(i, i + batchSize);
      await Promise.all(batch.map((url) => preloadImage(url)));
    }
  });
}
