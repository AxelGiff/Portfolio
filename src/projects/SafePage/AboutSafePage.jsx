import React from 'react';
import BadgeTextGradient from '../../BadgeGradient.tsx';
import ButtonRotatingBackgroundGradient from '../../ButtonRotatingBackgroundGradient.tsx';
import { TextGenerateEffect } from '../../text-generate-effect.tsx';
import VideoComponent from '../VideoComponent.jsx';
import SafePage from './images/Moovday_SafePage.mp4';
/* import Video from "./images/todolist.mp4";
import Edit from "./images/edittodo.mp4";
import Delete from "./images/deletetodo.mp4";

 */
export default function AboutSafePage() {
  const words = <div>
  SafePage stands as my first significant project that I embarked on in 2022. It's an endeavor that was inspired by the website{' '}
  <a href="https://dev-perso.com/">Dev-perso</a>
  {' '}. Being familiar with personal development, I've always been inclined to create projects that resonate with me on a personal level. I firmly believe that working on projects aligned with our personal interests is crucial for sustaining motivation and commitment in the long run. Therefore, SafePage is more than just a project to me; it embodies a fusion of my passion for personal development and my skills in web development, creating a fulfilling experience for both myself and the users.
</div>;

  return (
    <section id="about-container">
      <h1 className='about-title text-white text-5xl block text-center block mt-24 mb-32'>Zoom-in</h1>
      <div className="flex flex_responsive flex-col xl:flex-row items-center gap-12 m-48 sm:mt-0 sm:gap-24">
      <div class="gradient-sp z-[-10000] right-1/4 -top-1/8 w-1/2 h-full opacity-30"></div>

        {/* Image on the left */}
        <div className="relative w-full sm:w-1/2 h-auto">
          <div class="gradient-01 right-1/4 -top-1/8 w-1/2  h-full opacity-100"></div>
          <img alt="Product Preview" loading="lazy" width="2500vw" height="100vw" className="shadow-lg  sm:visible [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000  rounded-lg relative z-100 bottom-8 opacity-100" style={{color:"transparent"}}  src={require("./images/ecr.png")} /> 
        </div>
        {/* Text on the right */}
        <div className="text flex flex-col items-center justify-center z-50 sm:w-1/2">
        <p className="text-white text-lg ">{words}</p>                 <div className="mt-24 items-center "> 
            <ButtonRotatingBackgroundGradient text="View a demo" link="https://2dolist-axl.netlify.app/" />
          </div>
        </div>
      </div>
      {/* <VideoComponent video={Video} size="w-[80%] rounded-lg" /> */}

      <img alt="left gradient" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" className="absolute right-0 top-1/8" style={{color:"transparent"}} src={require("../../images/glow.png")} />
      <div className="relative">
        <img alt="gradient" loading="lazy" decoding="async" data-nimg="fill" class="h-[1000px] w-[1000px] z-[-1000] inset-0 object-cover absolute pointer-events-none select-none" style={{height:"200vh",width:"auto",left:"0",right:"0",top:"-540px",color:"transparent"}} sizes="100vw" src={require("../../images/tech-features-gradient.webp")} />
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
    <h1 className='about-title text-white text-5xl block text-center block mt-24 mb-32'>Moov'Page</h1>

     <VideoComponent video={SafePage} size="w-[80%] rounded-lg" />
    </section>
  )
}
