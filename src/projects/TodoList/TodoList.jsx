import React from 'react';

import LandingTodoList from './LandingTodoList.jsx';
import Technologies from '../Technologies.jsx';
import AboutTodoList from './AboutTodoList.jsx';

export default function PerformVision() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <LandingTodoList />
      <img src={new URL("./images/TodoList.png", import.meta.url).href} alt="screen todo list" loading="lazy" className="-mt-96 -z-[-10] w-[100%] h-[100%] sm:w-[1200px] sm:h-[650px] shadow-lg sm:visible [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000 rounded-xl" />
      <Technologies iconsToShow={["React", "CSS"]} />
      <AboutTodoList />
    </div>
  )
}