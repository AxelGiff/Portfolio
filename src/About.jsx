import React from 'react'
import BadgeTextGradient from './BadgeGradient.tsx';
import ButtonRotatingBackgroundGradient from './ButtonRotatingBackgroundGradient.tsx';
import {CardHoverEffect} from './Skills-card.tsx';
import { TextGenerateEffect } from './text-generate-effect.tsx';
import History from './History.jsx';

export default function About() {
  const words = `From Paris to VsCode, I'm a professional web developer who likes coding any website, webapps with my personal UI/UX design touch. I have been studying front/back end since 2021. I've always been someone who has a taste for the creation and the logical side. That's why I've decided to become a front-end developer to use my power of my brain-skills.`;



  return (
    <section id="about-container">
        <BadgeTextGradient text="About" />
    <h1 className='about-title text-white text-5xl block text-center block mb-32'>Discover me</h1>
    
    
      <div className="flex flex_responsive flex-col items-center gap-12 m-48 sm:mt-0 sm:gap-24">
        
       {/*  <div className="w-[400px] h-[200px] min-h-[200px]  arriere absolute  letter-spacing-1 text-white bg-hsla-45-17-95-80 backdrop-blur-xl backdrop-saturate-17 backdrop-filter-contrast-170 backdrop-filter px-10 border border-gray-800 animate-border-width bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000 rounded-2xl ">About t
       his</div>
         */}


<div className="flex flex-col sm:flex-row">
<div class="gradient-01  right-1/4 -top-1/8 w-1/2 h-full opacity-30"></div>

        {/* Colonne de gauche (Image) */}
        <div className="absolute w-full grid grid-rows-auto gap-0.5ch z-1 backdrop-blur-16 h-15% flex justify-evenly items-center "></div>
        <div className="flex flex-col items-center justify-center z-50 md:flex-row md:items-start md:justify-center"> 
        <img alt="left gradient" loading="lazy" width="700" height="700" decoding="async" data-nimg="1" className=" transform rotate-180 absolute left-0 top-1/8" style={{color:"transparent"}} src={require("./images/glow.png")}/>
        <img alt="Product Preview" loading="lazy" width="3000vw" height="100vw" className="cv_responsive shadow-lg sm:visible [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000  relative z-40 opacity-100" style={{color:"transparent"}}  src={require("./images/AboutCv-img.png")} /> 
          
        </div>
        

        <div className="text-base  flex flex-col items-center justify-center z-50 "
>
       {/*  
         <p className="text-white text-lg leading-relaxed">From Paris to <strong>VsCode</strong>, I'm a professional <strong>web developer</strong> who likes coding any website, webapps with my personal <strong>UI/UX</strong> design touch. I have been studying <strong>front/back end</strong> since <strong>2021</strong>. I've always been someone who has a taste for the <strong>creation</strong> and the <strong>logical side</strong>. That's why I've decided to become a <strong>front-end developer</strong> to use my power of my brain-skills.</p> */}
         
      {/* <TextGenerateEffect words={words} /> */}
      <p className="text-white text-[0.8rem] sm:text-lg mt-12 sm:mt-2">From Paris to VsCode, I'm a professional web developer who likes coding any website, webapps with my personal UI/UX design touch. I have been studying front/back end since 2021. I've always been someone who has a taste for the creation and the logical side. That's why I've decided to become a front-end developer to use my power of my brain-skills. </p>
          <div className="  mt-12 mb-24 sm:mt-24  items-center "> 
        <ButtonRotatingBackgroundGradient text="Curriculum Vitae" link="https://www.canva.com/design/DAGDQiAnvSg/2myuL53SpgUBMUtY_LeYqg/view?utm_content=DAGDQiAnvSg&utm_campaign=designshare&utm_medium=link&utm_source=editor"/>
      </div>
        </div>
      </div>
      
        <img alt="left gradient" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" className="absolute right-0 top-1/8" style={{color:"transparent"}} src={require("./images/glow.png")}/>
        {/* Colonne de gauche (Image) */}
       
</div>
    <BadgeTextGradient text="Skills" />
   
         <div className="relative">
         
         <img alt="gradient" loading="lazy" decoding="async" data-nimg="fill" class="h-[1000px] w-[1000px] inset-0 object-cover absolute pointer-events-none select-none" style={{height:"200vh",width:"auto",left:"0",right:"0",top:"-540px",color:"transparent"}} sizes="100vw" src={require("./images/tech-features-gradient.webp")}></img>
         <CardHoverEffect />

         </div>
         
    </section>
  )
}
