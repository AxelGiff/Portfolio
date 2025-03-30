import React, { memo } from 'react';
import BadgeTextGradient from '../../BadgeGradient.tsx';
import ButtonRotatingBackgroundGradient from '../../ButtonRotatingBackgroundGradient.tsx';
import { TextGenerateEffect } from '../../text-generate-effect.tsx';
import { LayoutGridDemo } from './layout.tsx';
import { useTranslation } from 'react-i18next';

// Import images directly
import dashboardBdlAdmin from './images/dashboard_bdl_admin.png';
import glowImage from '../../images/glow.png';
import techFeaturesGradient from '../../images/tech-features-gradient.webp';

const AboutPv = memo(() => {
        const { t } = useTranslation();
  
  const words = t('performvision_description');

  return (
    <section id="about-container">
      <h1 className='about-title text-white text-5xl block text-center block mt-24 mb-32'>{t('Zoom-in')}</h1>
      <div className="flex flex_responsive flex-col sm:flex-row items-center gap-12 m-48 sm:mt-0 sm:gap-24">
        <div className="gradient-pv z-[-10000] right-1/4 -top-1/8 w-1/2 h-full opacity-30"></div>

        {/* Image on the left */}
        <div className="relative w-full sm:w-1/2 h-auto">
          <div className="gradient-01 right-1/4 -top-1/8 w-1/2 h-full opacity-30"></div>
          <img 
            alt="Product Preview" 
            loading="lazy" 
            width="2000" 
            height="100" 
            className="cv_responsive shadow-lg sm:visible rounded-lg [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000 relative z-40 opacity-100" 
            src={dashboardBdlAdmin} 
          /> 
        </div>
        {/* Text on the right */}
        <div className="text flex flex-col items-center justify-center z-50 sm:w-1/2">
          <p className="text-white text-lg">{words}</p>                 
          <div className="mt-24 items-center "> 
            <ButtonRotatingBackgroundGradient text={t('Github')} link="https://github.com/AxelGiff/SAE_PerformVision" />
          </div>
        </div>
      </div>
      
      <img 
        alt="left gradient" 
        loading="lazy" 
        width="500" 
        height="500" 
        decoding="async" 
        className="absolute right-0 top-1/8" 
        src={glowImage} 
      />
      
      <div className="relative">
        <img 
          alt="gradient" 
          loading="lazy" 
          decoding="async" 
          className="h-[1000px] w-[1000px] inset-0 object-cover absolute pointer-events-none select-none" 
          style={{height:"200vh", width:"auto", left:"0", right:"0", top:"-540px"}} 
          sizes="100vw" 
          src={techFeaturesGradient} 
        />
      </div>
      
      <LayoutGridDemo />
    </section>
  );
});

export default AboutPv;
