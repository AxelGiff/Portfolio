import React, { memo } from 'react';
import { SpotlightPreview } from '../../pageSpotlight.tsx';
import TextShine from '../../TextShine.tsx'; 
import { AnimatedTooltipPreview } from "./tooltip.tsx";
import { useTranslation } from 'react-i18next';

import techPsBlue from '../PerformVision/images/tech_ps_blue.webp';

const LandingPage = memo(() => {
      const { t } = useTranslation();
  
  return (
    <div className="relative overflow-x-clip flex flex-col items-center justify-center text-center min-h-[75vh] pt-28 pb-20 sm:pb-28 px-4 w-full font-inter z-10">
      <img 
        alt="gradient" 
        loading="lazy" 
        decoding="async" 
        className="h-[1000px] w-[1000px] absolute inset-0 object-cover pointer-events-none select-none" 
        style={{
          position:"absolute",
          height:"100%",
          width:"100%",
          left:"0",
          top:"0",
          right:"0",
          bottom:"0"
        }} 
        sizes="100vw" 
        src={techPsBlue}
      />
      <SpotlightPreview fill="#ABE7F6" />
      <div className="text-gradient-primary1 text-sm sm:text-lg font-bold mt-4 text-center max-w-4xl mx-auto">
        2023 - 2024 | {t('One month')} <br /> <TextShine text="Perform Vision" />
      </div>
      <h2 className="text-[1.1rem] bg-gradient-to-b from-white via-white to-white bg-clip-text text-transparent mt-16">
        {t('Group work')}
      </h2>
      <div className="flex justify-between gap-4">
        <AnimatedTooltipPreview ids={[1, 2, 3, 4, 5]} />
      </div>
    </div>
  );
});

export default LandingPage;
