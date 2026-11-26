import React, { useEffect, useRef, memo, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { projectLoaders } from './utils/assetPreloader.js';

const projectComponents = {
  '1': lazy(projectLoaders['1']),
  '2': lazy(projectLoaders['2']),
  '3': lazy(projectLoaders['3']),
  '4': lazy(projectLoaders['4']),
  '5': lazy(projectLoaders['5']),
  '6': lazy(projectLoaders['6']),
};

// Composant fallback invisible
const TransparentFallback = memo(() => (
  <div style={{ 
    height: '100vh', 
    background: 'transparent'
  }}></div>
));

const ProjectDetail = memo(() => {
  const { id } = useParams();
  const targetRef = useRef(null);

  // Défiler vers le haut instantanément
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const ProjectComponent = projectComponents[id];

  return (
    <div ref={targetRef}>
      {ProjectComponent && (
        <Suspense fallback={<TransparentFallback />}>
          <ProjectComponent />
        </Suspense>
      )}
    </div>
  );
});

export default ProjectDetail;
