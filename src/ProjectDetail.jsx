import React, { useEffect, useRef, memo, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';

// Lazy load project components
const PerformVision = lazy(() => import('./projects/PerformVision/PerformVision.jsx'));
const LUTC = lazy(() => import('./projects/LUTC/LUTC.jsx'));
const TodoList = lazy(() => import('./projects/TodoList/TodoList.jsx'));
const NetCards = lazy(() => import('./projects/NetCards/NetCards.jsx'));
const SafePage = lazy(() => import('./projects/SafePage/SafePage.jsx'));
const Qualoto = lazy(() => import('./projects/Qualoto/Qualoto.jsx'));
const Cnn = lazy(() => import('./projects/CNN/cnn.jsx'));

const ProjectDetail = memo(() => {
  const { id } = useParams();
  const targetRef = useRef(null);

  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'auto' });
    }
  }, [id]);

  // Map project IDs to components
  const projectComponents = {
    '1': Qualoto,
    '2': Cnn,
    '3': PerformVision,
    '4': NetCards,
    '5': TodoList,
  };

  const ProjectComponent = projectComponents[id];

  return (
    <div ref={targetRef}>
      {ProjectComponent && (
        <Suspense fallback={<div style={{ minHeight: '100vh' }}></div>}>
          <ProjectComponent />
        </Suspense>
      )}
    </div>
  );
});

export default ProjectDetail;
