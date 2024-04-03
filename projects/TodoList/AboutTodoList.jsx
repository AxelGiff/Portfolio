import React from 'react';
import BadgeTextGradient from '../../BadgeGradient.tsx';
import ButtonRotatingBackgroundGradient from '../../ButtonRotatingBackgroundGradient.tsx';
import { TextGenerateEffect } from '../../text-generate-effect.tsx';

export default function AboutTodoList() {
  const words = `The purpose of creating a todo list was to practice assimilating React hooks (useEffect and useState) to understand their logic. Additionally, I love the concept of productivity, so creating projects like a todo list is just a joyous part of it.`;

  return (
    <section id="about-container">
      <h1 className='about-title text-white text-5xl block text-center block mt-24 mb-32'>Zoom-in</h1>
      <div className="flex flex-col sm:flex-row items-center gap-12 m-48 sm:mt-0 sm:gap-24">
      <div class="gradient-pv z-[-10000] right-1/4 -top-1/8 w-1/2 h-full opacity-30"></div>

        {/* Image on the left */}
        <div className="relative w-full sm:w-1/2 h-auto">
          <div class="gradient-01 right-1/4 -top-1/8 w-1/2 h-full opacity-30"></div>
          <img alt="Product Preview" loading="lazy" width="2000vw" height="100vw" className="shadow-lg rounded-lg invisible sm:visible rounded-lg[mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000 relative z-40 opacity-100" style={{color:"transparent"}}  src={require("./images/todolist2.png")} /> 
        </div>
        {/* Text on the right */}
        <div className="text flex flex-col items-center justify-center z-50 sm:w-1/2">
          <TextGenerateEffect words={words} />
          <div className="mt-24 items-center "> 
            <ButtonRotatingBackgroundGradient text="View a demo" link="https://2dolist-axl.netlify.app/" />
          </div>
        </div>
      </div>
      <img alt="left gradient" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" className="absolute right-0 top-1/8" style={{color:"transparent"}} src={require("../../images/glow.png")} />
      <div className="relative">
        <img alt="gradient" loading="lazy" decoding="async" data-nimg="fill" class="h-[1000px] w-[1000px] inset-0 object-cover absolute pointer-events-none select-none" style={{height:"200vh",width:"auto",left:"0",right:"0",top:"-540px",color:"transparent"}} sizes="100vw" src={require("../../images/tech-features-gradient.webp")} />
      </div>
    </section>
  )
}
