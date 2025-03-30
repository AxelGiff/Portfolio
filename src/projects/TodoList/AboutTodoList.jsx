import React from 'react';
import BadgeTextGradient from '../../BadgeGradient.tsx';
import ButtonRotatingBackgroundGradient from '../../ButtonRotatingBackgroundGradient.tsx';
import { TextGenerateEffect } from '../../text-generate-effect.tsx';
import VideoComponent from '../VideoComponent.jsx';
import { useTranslation } from 'react-i18next'; 
import Video from "./images/todolist.mp4";
import Edit from "./images/edittodo.mp4";
import Delete from "./images/deletetodo.mp4";

export default function AboutTodoList() {
  const { t } = useTranslation(); 
  
  return (
    <section id="about-container">
      <h1 className='about-title text-white text-5xl block text-center block mt-24 mb-32'>{t('Zoom-in')}</h1>
      <div className="flex flex_responsive flex-col xl:flex-row items-center gap-12 m-48 sm:mt-0 sm:gap-24">
        <div className="gradient-pv z-[-10000] right-1/4 -top-1/8 w-1/2 h-full opacity-30"></div>

<div className="relative w-full sm:w-1/2 h-auto">
  <div className="gradient-01 right-1/4 -top-1/8 w-1/2 h-full opacity-30"></div>
  <img 
    alt={t('todolist.imageAlt')} 
    loading="lazy" 
    width="2500" 
    height="1500" 
    className="shadow-lg rounded-lg sm:visible rounded-lg [mask-image:linear-gradient(to_bottom,white,white,transparent)] 
             transition duration-1000 relative z-40 opacity-100 scale-110 object-cover" 
    style={{color:"transparent"}} 
    src={new URL("./images/todolist2.png", import.meta.url).href} 
  /> 
</div>
        <div className="text flex flex-col items-center justify-center z-50 sm:w-1/2">
          <p className="text-white text-lg">{t('todolist.description')}</p>                 
          <div className="mt-12 sm:mt-24 items-center"> 
            <ButtonRotatingBackgroundGradient text={t('Github')} link="https://2dolist-axl.netlify.app/" />
          </div>
        </div>
      </div>
      <VideoComponent video={Video} size="w-[90%] sm:w-[80%] mt-12 sm:mt-2 rounded-lg" />

      <img 
        alt="left gradient" 
        loading="lazy" 
        width="500" 
        height="500" 
        decoding="async" 
        data-nimg="1" 
        className="absolute right-0 top-1/8" 
        style={{color:"transparent"}} 
        src={new URL("../../images/glow.png", import.meta.url).href} 
      />
      <div className="relative">
        <img 
          alt="gradient" 
          loading="lazy" 
          decoding="async" 
          data-nimg="fill" 
          className="h-[1000px] w-[1000px] z-[-1000] inset-0 object-cover absolute pointer-events-none select-none" 
          style={{height:"200vh",width:"auto",left:"0",right:"0",top:"-540px",color:"transparent"}} 
          sizes="100vw" 
          src={new URL("../../images/tech-features-gradient.webp", import.meta.url).href} 
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center mt-8">
        <div className="mt-24">
          <h2 className="about-title justify-center text-white text-5xl block text-center block mt-24 mb-24">{t('todolist.editTask')}</h2>
          <VideoComponent video={Edit} size="w-[80%] rounded-lg" />
        </div>
        <div className="mt-24">
          <h2 className="about-title justify-center text-white text-5xl block text-center block mt-24 mb-24">{t('todolist.checkDeleteTask')}</h2>
          <VideoComponent video={Delete} size="w-[80%] rounded-lg" />
        </div>
      </div>
    </section>
  );
}
