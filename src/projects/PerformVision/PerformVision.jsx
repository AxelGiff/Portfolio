import React from 'react';
import LandingPV from './LandingPV.jsx';
import Technologies from '../Technologies.jsx';
import AboutPv from './AboutPV.jsx';

export default function PerformVision() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <LandingPV />
      <img src={new URL("./images/screen_dash_admin_pres.png", import.meta.url).href} alt="screen dashboard perform vision" loading="lazy" className="-mt-96 w-[100%] h-[100%] sm:w-[1200px] sm:h-[650px] -z-[-10] shadow-lg  sm:visible [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000 rounded-xl" />
      <Technologies iconsToShow={["HTML","Tailwind","PHP","Javascript","PostgreSQL","Figma"]} />
      <AboutPv />
    </div>
  )
}