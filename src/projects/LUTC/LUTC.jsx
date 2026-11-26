import React from 'react';

import LandingLUTC from './LandingLUTC.jsx';
import Technologies from '../Technologies.jsx';
import AboutLUTC from './AboutLUTC.jsx';

export default function PerformVision() {
  return (
    <div className="flex flex-col items-center justify-center ">
    <LandingLUTC />
    
    <img src={require("./images/accueil.webp")}  alt="screen dashboard perform vision" loading="lazy" className="-mt-16 sm:-mt-36 lg:-mt-64 -z-[-10] w-[92%] max-w-5xl h-auto object-cover shadow-lg  sm:visible [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000 rounded-xl" />
    <Technologies iconsToShow={["WordPress","Figma","CSS"]} />
    <AboutLUTC />
  </div>
  )
}
