/**
 * Preloading and in-memory deduplication for route chunks and image assets.
 */

export const projectLoaders = {
  '1': () => import('../projects/Qualoto/Qualoto.jsx'),
  '2': () => import('../projects/CNN/cnn.jsx'),
  '3': () => import('../projects/LogsAnalyzer/LogsAnalyzer.jsx'),
  '4': () => import('../projects/NetCards/NetCards.jsx'),
  '5': () => import('../projects/RustAgent/RustAgent.jsx'),
  '6': () => import('../projects/Medicial/Medicial.jsx'),
};

const projectImageFolders = {
  '1': '/projects/Qualoto/',
  '2': '/projects/CNN/',
  '3': '/projects/LogsAnalyzer/',
  '4': '/projects/NetCards/',
  '5': '/projects/RustAgent/',
  '6': '/projects/Medicial/',
};

// Collects resolved URLs only for active project folders without executing component code.
const imageModules = import.meta.glob(
  [
    '../projects/Qualoto/images/*.{png,jpg,jpeg,webp,gif}',
    '../projects/CNN/images/*.{png,jpg,jpeg,webp,gif}',
    '../projects/LogsAnalyzer/images/*.{png,jpg,jpeg,webp,gif}',
    '../projects/NetCards/images/*.{png,jpg,jpeg,webp,gif}',
    '../projects/RustAgent/images/*.{png,jpg,jpeg,webp,gif}',
    '../projects/Medicial/images/*.{png,jpg,jpeg,webp,gif}',
  ],
  { eager: true, import: 'default' }
);

const preloadedUrls = new Set();
const prefetchedProjects = new Set();

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
 * Prefetches a project's JS chunk and its first 2 preview images on user intent.
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

  let count = 0;
  for (const [modulePath, url] of Object.entries(imageModules)) {
    if (modulePath.includes(folder)) {
      preloadImage(url);
      count += 1;
      if (count >= 2) break;
    }
  }
}

export function scheduleIdleAssetPreload() {}
