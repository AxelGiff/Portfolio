import React from 'react';

import LandingSafePage from './LandingSafePage.jsx';
import Technologies from '../Technologies.jsx';
import AboutSafePage from './AboutSafePage.jsx';
import {TracingBeamDemo} from './Tracing.jsx';
export default function PerformVision() {
  return (
    <div className="flex flex-col items-center justify-center ">
    <LandingSafePage />
    
    <img src={require("./images/SafePage.PNG")} width={1200} height={650} alt="screen todo list" loading="lazy" className="-mt-96 -z-[-10] shadow-lg invisible sm:visible [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000 rounded-xl" />
    <Technologies iconsToShow={["HTML","CSS","Javascript"]} />
    <AboutSafePage />
    <TracingBeamDemo />
  </div>
  )
}
