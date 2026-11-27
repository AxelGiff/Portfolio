import React from 'react';
import BadgeTextGradient from '../../BadgeGradient.tsx';
import ButtonRotatingBackgroundGradient from '../../ButtonRotatingBackgroundGradient.tsx';
import { TextGenerateEffect } from '../../text-generate-effect.tsx';
import VideoComponent from '../VideoComponent.jsx';
import { useTranslation } from 'react-i18next';

export default function AboutQualoto() {
      const { t } = useTranslation();
  
  const words = <div>
  {t('Qualoto_description')}  <br></br>
</div>;

  return (
    <section id="about-container" className="relative overflow-x-clip w-full">
      <h1 className='about-title text-white text-3xl sm:text-4xl lg:text-5xl block text-center mt-16 sm:mt-24 mb-12 sm:mb-20 px-4'>{t('Zoom-in')}</h1>
      <div className="flex flex_responsive flex-col xl:flex-row items-center gap-12 mx-4 sm:mx-12 lg:mx-24 xl:mx-36 my-12 sm:mt-0 sm:gap-24">
      <div className="gradient-qualabout z-[-10000] right-1/4 -top-1/8 w-1/2 h-full opacity-30"></div>

        {/* Image on the left */}
        <div className="relative w-full sm:w-1/2 h-auto">
          <div className="gradient-03 right-1/4 -top-1/8 w-1/2  h-full z-[-10000] opacity-70"></div>
          <img alt="Product Preview" loading="lazy" className="shadow-lg z-50 sm:visible [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000  rounded-lg relative z-100 bottom-8 opacity-100" style={{color:"transparent"}}  src={new URL("./images/accueilregles.webp", import.meta.url).href} /> 
        </div>
        {/* Text on the right */}
        <div className="text flex flex-col items-center justify-center z-50 sm:w-1/2">
        <div className="text-white text-lg ">{words}</div>                 
        <div className="mt-24 items-center "> 
            <ButtonRotatingBackgroundGradient text={t('Github')} link="https://github.com/AxelGiff/Qualoto" /> 
          </div>
        </div>
      </div>
      {/* <VideoComponent video={Video} size="w-[80%] rounded-lg" /> */}

      <img alt="left gradient" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" className="absolute right-0 top-1/8" style={{color:"transparent"}} src={new URL("../../images/glow.webp", import.meta.url).href} />
      <div className="relative">
        <div aria-hidden="true" className="ambient-tech-glow absolute -top-64 inset-x-0 mx-auto w-full max-w-6xl h-[620px] -z-10" />
      </div>

     {/* <div className="flex flex-row items-center justify-center mt-8 ">
      <div className="mt-24">
        <h2 className="about-title justify-center text-white text-5xl block text-center block mt-24 mb-24">Edit a Task</h2>
     <VideoComponent video={Edit} size="w-[80%] rounded-lg" />
     </div>
     <div className="mt-24">
     <h2 className="about-title justify-center text-white text-5xl block text-center block mt-24 mb-24">Check & Delete a Task</h2>

     
     </div>

     </div> */}
    <h1 className='about-title text-white text-3xl sm:text-4xl lg:text-5xl block text-center mt-16 sm:mt-24 mb-12 sm:mb-20 px-4'>{t('Features')}</h1>

    </section>
  )
}
