import React from 'react';

import LandingLUTC from './LandingLUTC.jsx';
import Technologies from '../Technologies.jsx';
import AboutLUTC from './AboutLUTC.jsx';

export default function PerformVision() {
  return (
    <div className="flex flex-col items-center justify-center ">
    <LandingLUTC />
    
    <img src={require("./images/accueil.png")} width={1200} height={650} alt="screen dashboard perform vision" loading="lazy" className="-mt-96 -z-[-10] shadow-lg invisible sm:visible [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000 rounded-xl" />
    <Technologies iconsToShow={["WordPress","Figma","CSS"]} />
    <AboutLUTC />
  </div>
  )
}
