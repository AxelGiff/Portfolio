import React from 'react';
import BadgeTextGradient from '../../BadgeGradient.tsx';
import ButtonRotatingBackgroundGradient from '../../ButtonRotatingBackgroundGradient.tsx';
import { TextGenerateEffect } from '../../text-generate-effect.tsx';
import VideoComponent from '../VideoComponent.jsx';

export default function AboutQualoto() {
  const words = <div>
  SafePage stands as my first significant project that I embarked on in 2022. It's an endeavor that was inspired by the website{' '}
  <a href="https://dev-perso.com/">Dev-perso</a>
  {' '}. Being familiar with personal development, I've always been inclined to create projects that resonate with me on a personal level. I firmly believe that working on projects aligned with our personal interests is crucial for sustaining motivation and commitment in the long run. Therefore, SafePage is more than just a project to me; it embodies a fusion of my passion for personal development and my skills in web development, creating a fulfilling experience for both myself and the users.
</div>;

  return (
    <section id="about-container">
      <h1 className='about-title text-white text-5xl block text-center block mt-24 mb-32'>Zoom-in</h1>
      <div className="flex flex_responsive flex-col xl:flex-row items-center gap-12 m-48 sm:mt-0 sm:gap-24">
      <div class="gradient-qualabout z-[-10000] right-1/4 -top-1/8 w-1/2 h-full opacity-30"></div>

        {/* Image on the left */}
        <div className="relative w-full sm:w-1/2 h-auto">
          <div class="gradient-03 right-1/4 -top-1/8 w-1/2  h-full z-[-10000] opacity-70"></div>
          <img alt="Product Preview" loading="lazy" width="2500vw" height="150vw" className="shadow-lg z-50 sm:visible [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000  rounded-lg relative z-100 bottom-8 opacity-100" style={{color:"transparent"}}  src={new URL("./images/accueilregles.png", import.meta.url).href} /> 
        </div>
        {/* Text on the right */}
        <div className="text flex flex-col items-center justify-center z-50 sm:w-1/2">
        <p className="text-white text-lg ">{words}</p>                 
        <div className="mt-24 items-center "> 
            <ButtonRotatingBackgroundGradient text="View on GitHub" link="https://github.com/AxelGiff/Qualoto" />
          </div>
        </div>
      </div>
      {/* <VideoComponent video={Video} size="w-[80%] rounded-lg" /> */}

      <img alt="left gradient" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" className="absolute right-0 top-1/8" style={{color:"transparent"}} src={new URL("../../images/glow.png", import.meta.url).href} />
      <div className="relative">
        <img alt="gradient" loading="lazy" decoding="async" data-nimg="fill" class="h-[1000px] w-[1000px] z-[-1000] inset-0 object-cover absolute pointer-events-none select-none" style={{height:"200vh",width:"auto",left:"0",right:"0",top:"-540px",color:"transparent"}} sizes="100vw" src={new URL("../../images/tech-features-gradient.webp", import.meta.url).href} />
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
    <h1 className='about-title text-white text-5xl block text-center block mt-24 mb-32'>Features</h1>

    </section>
  )
}