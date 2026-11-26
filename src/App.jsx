import React, { Suspense, lazy, memo, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './App.css';
import './index.css';
import Header from './Header.jsx';
import LanguageSelector from './LanguageSelector';
import { scheduleIdleAssetPreload } from './utils/assetPreloader.js';

const Routage = lazy(() => import('./Routage.jsx'));
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
      backgroundAttachment: 'fixed',
      zIndex: 10,
    }} />
  );
});

const ErrorBoundary = memo(({ children }) => {
  return <>{children}</>;
});

const ScrollProgressBar = memo(() => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[100] bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-500 pointer-events-none"
      style={{ scaleX }}
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
    const preloadComponents = async () => {
      try {
        const routageImport = import('./Routage.jsx');
        const projectsImport = import('./Projects.jsx');
        const projectDetailImport = import('./ProjectDetail.jsx');
        
        await Promise.all([routageImport, projectsImport, projectDetailImport]);
      } catch (error) {
        console.error('Erreur de préchargement:', error);
      }
    };
    
    const timer = setTimeout(() => {
      preloadComponents();
      scheduleIdleAssetPreload();
    }, 800);
    return () => clearTimeout(timer);
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
