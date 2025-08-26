import React, { useEffect, useRef, memo, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';

const PerformVision = lazy(() => import(/* webpackPrefetch: true */ './projects/PerformVision/PerformVision.jsx'));
const LUTC = lazy(() => import(/* webpackPrefetch: true */ './projects/LUTC/LUTC.jsx'));
const TodoList = lazy(() => import(/* webpackPrefetch: true */ './projects/TodoList/TodoList.jsx'));
const NetCards = lazy(() => import(/* webpackPrefetch: true */ './projects/NetCards/NetCards.jsx'));
const SafePage = lazy(() => import(/* webpackPrefetch: true */ './projects/SafePage/SafePage.jsx'));
const Qualoto = lazy(() => import(/* webpackPrefetch: true */ './projects/Qualoto/Qualoto.jsx'));
const Medicial=lazy(() => import(/* webpackPrefetch: true */ './projects/Medicial/Medicial.jsx'));
const Cnn = lazy(() => import(/* webpackPrefetch: true */ './projects/CNN/cnn.jsx'));

const projectComponents = {
  '1': Qualoto,
  '2': Cnn,
  '3': PerformVision,
  '4': NetCards,
  '5': TodoList,
  '6': Medicial,
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
