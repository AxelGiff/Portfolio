import React, { memo } from 'react';
import LandingPV from './LandingPV.jsx';
import Technologies from '../Technologies.jsx';
import AboutPv from './AboutPV.jsx';

import screenDashAdminPres from './images/screen_dash_admin_pres.webp';

const PerformVision = memo(() => {
  const technologies = ["HTML", "Tailwind", "PHP", "Javascript", "PostgreSQL", "Figma"];
  
  return (
    <div className="flex flex-col items-center justify-center">
      <LandingPV />
      <img 
        src={screenDashAdminPres} 
        alt="screen dashboard perform vision" 
        loading="lazy" 
        className="-mt-6 sm:-mt-12 lg:-mt-16 w-[92%] max-w-5xl h-auto object-cover -z-[-10] shadow-lg sm:visible [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000 rounded-xl" 
      />
      <Technologies iconsToShow={technologies} />
      <AboutPv />
    </div>
  );
});

export default PerformVision;
