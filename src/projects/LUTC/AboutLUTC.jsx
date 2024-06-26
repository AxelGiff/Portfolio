import React from 'react';
import BadgeTextGradient from '../../BadgeGradient.tsx';
import ButtonRotatingBackgroundGradient from '../../ButtonRotatingBackgroundGradient.tsx';
import { TextGenerateEffect } from '../../text-generate-effect.tsx';
import {CardStackDemo} from './CardStep.tsx';

export default function AboutLUTC() {
  const words = `During my internship at Level Up Tech Consulting, I leveraged my web development experience to create, modify, and optimize the company's website over a period of 1 month. This included improving the performance of each web page, as well as SEO optimization.`;

  return (
    <section id="about-container">
      <h1 className='about-title text-white text-5xl block text-center block mt-24 mb-32'>Zoom-in</h1>
      <div className="flex flex_responsive flex-col  xl:flex-row items-center gap-12 m-48 sm:mt-0 sm:gap-24">
      <div class="gradient-lutc z-[-10000] right-1/4 -top-1/8 w-1/2 h-full opacity-30"></div>

        {/* Image on the left */}
        <div className="relative w-full sm:w-1/2 h-auto">
          <div class="gradient-01 right-1/4 -top-1/8 w-1/2 h-full opacity-30"></div>
          <img alt="Product Preview" loading="lazy" width="2500vw" height="100vw" className="shadow-lg rounded-lg  sm:visible rounded-lg [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000 relative z-40 opacity-100" style={{color:"transparent"}}  src={require("./images/Figma.png")} /> 
        </div>
        {/* Text on the right */}
        <div className="text flex flex-col items-center justify-center z-50 sm:w-1/2">
        <p className="text-white text-lg ">{words}</p>          <div className="mt-24 items-center "> 
            <ButtonRotatingBackgroundGradient text="Visit the website" link="https://level-up-tech-consulting.com/" />
          </div>
        </div>
      </div>
      <img alt="left gradient" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" className="absolute right-0 top-1/8" style={{color:"transparent"}} src={require("../../images/glow.png")} />
      <div className="relative">
        <img alt="gradient" loading="lazy" decoding="async" data-nimg="fill" class="h-[1000px] w-[1000px] inset-0 object-cover absolute pointer-events-none select-none" style={{height:"200vh",width:"auto",left:"0",right:"0",top:"-540px",color:"transparent"}} sizes="100vw" src={require("../../images/tech-features-gradient.webp")} />
      </div>
      <h1 className='about-title text-white text-5xl block text-center block mt-12 mb-2'>Optimization</h1>
      <h2 className='about-title text-white text-l block text-center block'>SEO - Performance & Acessibility</h2>


      <div className="flex justify-center items-center flex-row">

        <CardStackDemo />
      

        </div>
    </section>
  )
}