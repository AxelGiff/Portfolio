import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import PerformVision from './projects/PerformVision/PerformVision.jsx';
import LUTC from './projects/LUTC/LUTC.jsx';
import TodoList from './projects/TodoList/TodoList.jsx';
import NetCards from './projects/NetCards/NetCards.jsx';
import SafePage from './projects/SafePage/SafePage.jsx';

// Importez d'autres composants de projet au besoin

const ProjectDetail = () => {
  const { id } = useParams();
  const targetRef = useRef(null);

  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [id]);

  // Utilisez des instructions conditionnelles pour afficher le contenu du projet en fonction de son ID
  let projectContent;
  if (id === '1') {
    projectContent = <PerformVision />;
  } 
  else if(id === '2') {
    projectContent = <NetCards />;
  }
  else if(id === '3'){
    projectContent = <SafePage />;
  }
  else if(id === '4'){
    projectContent = <TodoList />;
  }
  else if(id === '5'){
    projectContent = <LUTC />;
  }


  return (
    <div ref={targetRef}>
      <h1>Project Detail Page</h1>
      <p>Project ID: {id}</p>
      {/* Afficher le contenu du projet en fonction de son ID */}
      {projectContent}
    </div>
  );
};

export default ProjectDetail;
