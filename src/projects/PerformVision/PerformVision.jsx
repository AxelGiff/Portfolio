import React from 'react';

import LandingPV from './LandingPV.jsx';
import Technologies from '../Technologies.jsx';
import AboutPv from './AboutPV.jsx';


export default function PerformVision() {
  return (
    <div className="flex flex-col items-center justify-center ">
    <LandingPV />
    
    <img src={require("./images/screen_dash_admin_pres.png")} width={1200} height={650} alt="screen dashboard perform vision" loading="lazy" className="-mt-96 -z-[-10] shadow-lg invisible sm:visible [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000 rounded-xl" />
    <Technologies iconsToShow={["HTML","Tailwind","PHP","Javascript","PostgreSQL","Figma"]} />
    <AboutPv />
  </div>
  )
}
