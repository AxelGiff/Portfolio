import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import PerformVision from './projects/PerformVision/PerformVision.jsx';
import LUTC from './projects/LUTC/LUTC.jsx';
import TodoList from './projects/TodoList/TodoList.jsx';
import NetCards from './projects/NetCards/NetCards.jsx';
import SafePage from './projects/SafePage/SafePage.jsx';
import Qualoto from './projects/Qualoto/Qualoto.jsx';
import Cnn from './projects/CNN/cnn.jsx';


const ProjectDetail = () => {
  const { id } = useParams();
  const targetRef = useRef(null);

  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [id]);

  let projectContent;

  if (id === '1') {
    projectContent=<Qualoto />;
  }
  else if (id === '2') {
    projectContent = <Cnn />;
  } 
  else if(id === '3') {
    projectContent = <PerformVision />;
  }
  else if(id === '4'){
    projectContent = <NetCards />;
  }
  else if(id === '5'){
    projectContent = <TodoList />;
  }


  return (
    <div ref={targetRef}>
      <h1>Project Detail Page</h1>
      <p>Project ID: {id}</p>
      {projectContent}
    </div>
  );
};

export default ProjectDetail;
