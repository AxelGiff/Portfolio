import React, { useEffect, useRef, memo, lazy, Suspense } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projectLoaders, prefetchProject } from './utils/assetPreloader.js';
import { smoothScrollTo } from './utils/smoothScroll.js';

const projectComponents = {
  '1': lazy(projectLoaders['1']),
  '2': lazy(projectLoaders['2']),
  '3': lazy(projectLoaders['3']),
  '4': lazy(projectLoaders['4']),
  '5': lazy(projectLoaders['5']),
  '6': lazy(projectLoaders['6']),
};

const projectMeta = [
  { id: '6', index: '01', title: 'Medic.ial' },
  { id: '5', index: '02', title: 'RustAgent' },
  { id: '3', index: '03', title: 'LogsAnalyzer' },
  { id: '1', index: '04', title: 'Qualoto' },
  { id: '2', index: '05', title: 'Classification CNN' },
  { id: '4', index: '06', title: 'NetCards' },
];

// Composant fallback invisible
const TransparentFallback = memo(() => (
  <div style={{
    height: '100vh',
    background: 'transparent'
  }}></div>
));

const ProjectDetail = memo(() => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const targetRef = useRef(null);
  const isFr = i18n.language?.startsWith('fr');

  // Défiler vers le haut instantanément
  useEffect(() => {
    smoothScrollTo(0, { immediate: true });
  }, [id]);

  // Raccourci clavier Esc pour revenir aux projets
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        navigate('/#project-container', { state: { scrollTo: 'project-container' } });
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [navigate]);

  const ProjectComponent = projectComponents[id];
  const currentIndex = projectMeta.findIndex((p) => p.id === id);
  const prevProject = currentIndex > 0 ? projectMeta[currentIndex - 1] : null;
  const nextProject = currentIndex >= 0 && currentIndex < projectMeta.length - 1 ? projectMeta[currentIndex + 1] : null;

  return (
    <div ref={targetRef} className="relative">
      <div className="fixed top-3 left-3 md:top-24 md:left-8 z-[1001]">
        <Link
          to="/#project-container"
          state={{ scrollTo: 'project-container' }}
          aria-label={isFr ? 'Retour aux projets' : 'Back to projects'}
          className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-neutral-950/90 px-3.5 py-2 min-h-[40px] md:min-h-0 text-xs sm:text-sm font-medium text-neutral-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-white/30 hover:text-white active:scale-95"
        >
          <svg className="transition-transform group-hover:-translate-x-0.5" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span>{isFr ? 'Projets' : 'Projects'}</span>
          <kbd className="hidden md:inline-block rounded border border-white/15 bg-white/5 px-1.5 py-0.5 text-[10px] font-mono text-neutral-400">
            Esc
          </kbd>
        </Link>
      </div>

      {ProjectComponent ? (
        <Suspense fallback={<TransparentFallback />}>
          <ProjectComponent />
        </Suspense>
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-center text-white gap-4 px-4">
          <h1 className="text-2xl font-bold">{isFr ? 'Projet introuvable' : 'Project not found'}</h1>
          <Link to="/" className="text-sky-400 underline">
            {isFr ? 'Retour à l’accueil' : 'Back to home'}
          </Link>
        </div>
      )}

      {ProjectComponent && (
        <nav
          aria-label={isFr ? 'Navigation entre projets' : 'Project navigation'}
          className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-28 md:py-20 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10"
        >
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.id}`}
              onMouseEnter={() => prefetchProject(prevProject.id)}
              onFocus={() => prefetchProject(prevProject.id)}
              className="group flex flex-col items-start rounded-2xl border border-white/10 bg-neutral-950/90 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:border-white/25 hover:bg-white/[0.04]"
            >
              <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-neutral-500 group-hover:text-sky-400 transition">
                <svg className="transition-transform group-hover:-translate-x-0.5" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                {isFr ? 'Précédent' : 'Previous'} · {prevProject.index}
              </span>
              <span className="mt-2 text-base font-semibold text-neutral-200 group-hover:text-white transition">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          {nextProject && (
            <Link
              to={`/projects/${nextProject.id}`}
              onMouseEnter={() => prefetchProject(nextProject.id)}
              onFocus={() => prefetchProject(nextProject.id)}
              className="group flex flex-col items-end text-right rounded-2xl border border-white/10 bg-neutral-950/90 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:border-white/25 hover:bg-white/[0.04]"
            >
              <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-neutral-500 group-hover:text-sky-400 transition">
                {nextProject.index} · {isFr ? 'Suivant' : 'Next'}
                <svg className="transition-transform group-hover:translate-x-0.5" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </span>
              <span className="mt-2 text-base font-semibold text-neutral-200 group-hover:text-white transition">
                {nextProject.title}
              </span>
            </Link>
          )}
        </nav>
      )}
    </div>
  );
});

export default ProjectDetail;
