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
        src={new URL("./images/Qualoto.webp", import.meta.url).href}
        alt="screen todo list"
        loading="lazy"
        className="-mt-6 sm:-mt-12 lg:-mt-16 -z-[-10] w-[92%] max-w-5xl h-auto object-cover shadow-lg sm:visible [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000 rounded-xl"
      />
      <Technologies iconsToShow={["HTML", "Tailwind", "Django", "MySQL"]} />
      <AboutQualoto />
      <TracingBeamDemo />
    </div>
  );
}