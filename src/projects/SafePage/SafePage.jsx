import React from 'react';

import LandingSafePage from './LandingSafePage.jsx';
import Technologies from '../Technologies.jsx';
import AboutSafePage from './AboutSafePage.jsx';
import {TracingBeamDemo} from './Tracing.jsx';
export default function PerformVision() {
  return (
    <div className="flex flex-col items-center justify-center ">
    <LandingSafePage />
    
    <img src={require("./images/SafePage.PNG")}  alt="screen todo list" loading="lazy" className="-mt-96 -z-[-10] w-[100%] h-[100%] sm:w-[1200px] sm:h-[650px] shadow-lg  sm:visible [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000 rounded-xl" />
    <Technologies iconsToShow={["HTML","CSS","Javascript"]} />
    <AboutSafePage />
    <TracingBeamDemo />
  </div>
  )
}
