import React, { Suspense, lazy, memo, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import Header from './Header.jsx';

const Routage = lazy(() => {
  const img = new Image();
  img.src = './images/tech-features-gradient.webp';
  return import('./Routage.jsx');
});
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

const App = memo(() => {
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
    
    const timer = setTimeout(preloadComponents, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-apple">
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<BackgroundFallback />}>
          <Routes>
            <Route path="/" element={<Routage />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
});

export default App;
