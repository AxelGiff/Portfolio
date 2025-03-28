import React, { Suspense, lazy, memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import Header from './Header.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';

// Lazy load components mais avec un fallback invisible
const Routage = lazy(() => import('./Routage.jsx'));
const Projects = lazy(() => import('./Projects.jsx'));
const ProjectDetail = lazy(() => import('./ProjectDetail.jsx'));

const App = memo(() => {
  return (
    <div className="font-apple">
      <Header />
      <ErrorBoundary>
        <Suspense >
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
