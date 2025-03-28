import React from 'react';
import { useTranslation } from 'react-i18next';
import BadgeTextGradient from './BadgeGradient.tsx';
import ButtonRotatingBackgroundGradient from './ButtonRotatingBackgroundGradient.tsx';
import { CardHoverEffect } from './Skills-card.tsx';
import { TextGenerateEffect } from './text-generate-effect.tsx';
import History from './History.jsx';
import LanguageSelector from './LanguageSelector';

export default function About() {
  const { t } = useTranslation();
 
  return (
    <section id="about-container">
      <BadgeTextGradient text="About" />
      <LanguageSelector />
      <h1 className='about-title text-white text-5xl block text-center block mb-32'>Discover me</h1>
      <div className="flex flex_responsive flex-col items-center gap-12 m-48 sm:mt-0 sm:gap-24">
        <div className="flex flex-col sm:flex-row">
          <div className="gradient-01 right-1/4 -top-1/8 w-1/2 h-full opacity-30"></div>
          <div className="absolute w-full grid grid-rows-auto gap-0.5ch z-1 backdrop-blur-16 h-15% flex justify-evenly items-center "></div>
          <div className="flex flex-col items-center justify-center z-50 md:flex-row md:items-start md:justify-center">
            <img alt="left gradient" loading="lazy" width="700" height="700" decoding="async" data-nimg="1" className="transform rotate-180 absolute left-0 top-1/8" style={{color:"transparent"}} src={new URL("./images/glow.png", import.meta.url).href} />
            <img alt="Product Preview" loading="lazy" width="3000vw" height="100vw" className="cv_responsive cv_responsive_mobile shadow-lg sm:visible [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000 relative z-40 opacity-100" style={{color:"transparent"}} src={new URL("./images/AboutCv-img.png", import.meta.url).href} />
          </div>
          <div className="text-base flex flex-col items-center justify-center z-50">
            <p className="text-white text-[0.8rem] sm:text-lg mt-12 sm:mt-2">{t('about_description')}</p>
            <div className="mt-12 mb-24 sm:mt-24 items-center">
              <ButtonRotatingBackgroundGradient text="Curriculum Vitae" link={new URL("./images/AXEL-GIFFARD_CV.pdf", import.meta.url).href} />  
            </div>
          </div>
        </div>
        <img alt="left gradient" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" className="absolute right-0 top-1/8" style={{color:"transparent"}} src={new URL("./images/glow.png", import.meta.url).href} />
      </div>
      <BadgeTextGradient text="Skills" />
      <div className="relative">
        <img alt="gradient" loading="lazy" decoding="async" data-nimg="fill" className="h-[1000px] w-[1000px] inset-0 object-cover absolute pointer-events-none select-none" style={{height:"200vh",width:"auto",left:"0",right:"0",top:"-540px",color:"transparent"}} sizes="100vw" src={new URL("./images/tech-features-gradient.webp", import.meta.url).href} />
        <CardHoverEffect />
      </div>
    </section>
  );
}
