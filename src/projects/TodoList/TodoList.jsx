import React from 'react';

import LandingTodoList from './LandingTodoList.jsx';
import Technologies from '../Technologies.jsx';
import AboutTodoList from './AboutTodoList.jsx';

export default function PerformVision() {
  return (
    <div className="flex flex-col items-center justify-center ">
    <LandingTodoList />
    
    <img src={require("./images/TodoList.png")} width={1200} height={650} alt="screen todo list" loading="lazy" className="-mt-96 -z-[-10] shadow-lg invisible sm:visible [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000 rounded-xl" />
    <Technologies iconsToShow={["React","CSS"]} />
    <AboutTodoList />
  </div>
  )
}
