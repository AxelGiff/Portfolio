import React from 'react';
import { useTranslation } from 'react-i18next';
import BadgeTextGradient from './BadgeGradient.tsx';
import ButtonRotatingBackgroundGradient from './ButtonRotatingBackgroundGradient.tsx';
import { CardHoverEffect } from './Skills-card.tsx';

export default function About() {
  const { t } = useTranslation();
 
  return (
    <section id="about-container" className="relative overflow-x-clip [contain:layout_style] mt-20 sm:mt-36 lg:mt-48">
      <img alt="" loading="lazy" width="700" height="700" decoding="async" data-nimg="1" className="transform rotate-180 absolute left-0 top-24 pointer-events-none select-none opacity-80" style={{color:"transparent"}} src={new URL("./images/glow.webp", import.meta.url).href} />
      <img alt="" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" className="absolute right-0 top-24 pointer-events-none select-none opacity-80" style={{color:"transparent"}} src={new URL("./images/glow.webp", import.meta.url).href} />

      <BadgeTextGradient text={t('About')} />
      <h1 className="about-title text-white text-3xl sm:text-5xl lg:text-6xl block text-center mb-10 sm:mb-20 lg:mb-28 px-4">{t('Discover me')}</h1>
      <div className="max-w-7xl mx-auto px-5 sm:px-12 mb-20 sm:mb-36 lg:mb-48 flex flex-col items-center gap-12 sm:gap-24">
        <div className="relative flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-24 w-full">
          <div className="gradient-01 right-1/4 -top-1/8 w-1/2 h-full opacity-30 pointer-events-none"></div>
          <div className="flex flex-col items-center justify-center z-50 w-full lg:w-1/2">
            <img alt="Aperçu du CV d'Axel Giffard" loading="lazy" decoding="async" className="w-full max-w-md sm:max-w-xl h-auto shadow-2xl [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000 relative z-40 opacity-100 rounded-2xl" style={{color:"transparent"}} src={new URL("./images/AboutCv-img.webp", import.meta.url).href} />
          </div>
          <div className="text-base flex flex-col items-center lg:items-start justify-center z-50 w-full lg:w-1/2">
            <p className="text-neutral-200 text-[15px] sm:text-lg lg:text-xl leading-relaxed sm:leading-loose text-left sm:text-center lg:text-left">{t('about_description')}</p>
            <div className="mt-8 sm:mt-12">
              <ButtonRotatingBackgroundGradient text="Curriculum Vitae" link={new URL("./images/AXEL-GIFFARD_CV.pdf", import.meta.url).href} />  
            </div>
          </div>
        </div>
      </div>
      <BadgeTextGradient text={t('Skills')} />
      <div className="relative">
        <div aria-hidden="true" className="ambient-tech-glow absolute -top-44 -bottom-36 inset-x-0 -z-10" />
        <CardHoverEffect />
      </div>
    </section>
  );
}
