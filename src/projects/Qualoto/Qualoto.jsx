import React from 'react';
import Technologies from '../Technologies.jsx';
import LandingQualoto from './LandingQualoto.jsx';
import AboutQualoto from './AboutQualoto.jsx';
import { TracingBeamDemo } from './Tracing.jsx';

export default function Qualoto() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <LandingQualoto />
      <img
        src={new URL("./images/Qualoto.png", import.meta.url).href}
        alt="screen todo list"
        loading="lazy"
        className="-mt-96 -z-[-10] w-[100%] h-[100%] sm:w-[1200px] sm:h-[650px] shadow-lg sm:visible [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000 rounded-xl"
      />
      <Technologies iconsToShow={["HTML", "Tailwind", "Django", "MySQL"]} />
      <AboutQualoto />
      <TracingBeamDemo />
    </div>
  );
}