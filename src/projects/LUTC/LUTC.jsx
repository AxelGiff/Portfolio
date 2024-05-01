import React from 'react';

import LandingLUTC from './LandingLUTC.jsx';
import Technologies from '../Technologies.jsx';
import AboutLUTC from './AboutLUTC.jsx';

export default function PerformVision() {
  return (
    <div className="flex flex-col items-center justify-center ">
    <LandingLUTC />
    
    <img src={require("./images/accueil.png")}  alt="screen dashboard perform vision" loading="lazy" className="-mt-96 -z-[-10] w-[100%] h-[100%] sm:w-[1200px] sm:h-[650px] shadow-lg  sm:visible [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000 rounded-xl" />
    <Technologies iconsToShow={["WordPress","Figma","CSS"]} />
    <AboutLUTC />
  </div>
  )
}
