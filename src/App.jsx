import React, { Suspense, lazy, memo, useEffect, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Header from './Header.jsx';
import LanguageSelector from './LanguageSelector';
import Routage from './Routage.jsx';
import { initSmoothScroll } from './utils/smoothScroll.js';

const Projects = lazy(() => import('./Projects.jsx'));
const ProjectDetail = lazy(() => import('./ProjectDetail.jsx'));

const BackgroundFallback = memo(() => {
  return (
    <div className="background-fallback" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#000000',
      backgroundImage: 'radial-gradient(circle at center,rgba(255,255,255,0.008)0,rgba(255,255,255,0.005) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.01) 1px, transparent 1px)',
      backgroundSize: '30px 30px',
      zIndex: 10,
    }} />
  );
});

const ErrorBoundary = memo(({ children }) => {
  return <>{children}</>;
});

const ScrollProgressBar = memo(() => {
  const barRef = useRef(null);

  useEffect(() => {
    const supportsScrollTimeline =
      typeof CSS !== 'undefined' &&
      typeof CSS.supports === 'function' &&
      CSS.supports('animation-timeline: scroll()');

    if (supportsScrollTimeline) return undefined;

    let rafId = null;
    const updateBar = () => {
      rafId = null;
      const el = barRef.current;
      if (!el) return;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      el.style.transform = `scaleX(${progress})`;
    };

    const onScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(updateBar);
      }
    };

    updateBar();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={barRef}
      aria-hidden="true"
      className="scroll-progress-bar fixed top-0 left-0 right-0 h-[2px] origin-left z-[100] bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-500 pointer-events-none will-change-transform"
    />
  );
});

const App = memo(() => {
  const { i18n } = useTranslation();
  const isFr = i18n.language?.startsWith('fr');

  useEffect(() => {
    document.documentElement.lang = isFr ? 'fr' : 'en';
  }, [isFr]);

  useEffect(() => {
    return initSmoothScroll();
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="font-apple">
        <ScrollProgressBar />
        <a href="#main-content" className="skip-link">
          {isFr ? 'Aller au contenu principal' : 'Skip to main content'}
        </a>
        <Header />
        <LanguageSelector />

        <main id="main-content">
          <ErrorBoundary>
            <Suspense fallback={<BackgroundFallback />}>
              <Routes>
                <Route path="/" element={<Routage />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
      </div>
    </MotionConfig>
  );
});

export default App;
