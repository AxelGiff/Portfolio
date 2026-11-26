import React from 'react'
import { SpotlightPreview } from '../../pageSpotlight.tsx';
import TextShine from '../../TextShine.tsx'; 

import {AnimatedTooltipPreview} from "../PerformVision/tooltip.tsx";

export default function LandingPage() {
  return (
    
    <div className="relative overflow-x-clip flex flex-col items-center justify-center text-center min-h-[75vh] pt-28 pb-20 sm:pb-28 px-4 w-full font-inter z-10">
<img alt="gradient" loading="lazy" decoding="async" data-nimg="fill" className="h-[1000px] w-[1000px] absolute inset-0 object-cover pointer-events-none select-none" style={{position:"absolute",height:"100%",width:"100%",left:"0",top:"0",right:"0",bottom:"0",color:"transparent"}} sizes="100vw" src={require("./images/tech_lutc.webp")}></img>
            <SpotlightPreview fill="#C48C49" />
         
        <div className="text-gradient-primary1 text-sm sm:text-lg font-bold mt-4 text-center max-w-4xl mx-auto">2024 | Two months <br></br>  <TextShine text="Level Up Tech Consulting" />{/* <h1 className="text-gradient-primary2 font-bold text-8xl ">Axel</h1> */}</div>
        <h2 className=" text-[1.1rem] bg-gradient-to-b from-white via-white to-white bg-clip-text text-transparent text-transparent mt-16">Group work</h2>

   <div className="flex justify-between gap-4">
    
   <AnimatedTooltipPreview ids={[1]} />

</div>
   {/*   <TextRevealCard
        text="Front-End Developer"
        revealText="Front-End Developer" /> */}
  
    </div>
  )
}
