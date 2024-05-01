import React from 'react'
import { SpotlightPreview } from '../../pageSpotlight.tsx';
import TextShine from '../../TextShine.tsx'; 

import {AnimatedTooltipPreview} from "./tooltip.tsx";

export default function LandingPage() {
  return (
    
    <div className="flex mb-40 -mt-24 font-inter flex-col items-center justify-center h-screen z-10">
<img alt="gradient" loading="lazy" decoding="async" data-nimg="fill" class="h-[1000px] w-[1000px] absolute inset-0 object-cover pointer-events-none select-none" style={{position:"absolute",height:"100%",width:"100%",left:"0",top:"0",right:"0",bottom:"0",color:"transparent"}} sizes="100vw" src={require("../PerformVision/images/tech_ps_blue.png")}></img>
            <SpotlightPreview fill="#ABE7F6" />
         
        <p className="text-gradient-primary1 text-[0.8rem] lg:text-[1.3rem] font-bold relative right-2 mt-6">2023 - 2024 | One month <br></br>  <TextShine text="Perform Vision" />{/* <h1 className="text-gradient-primary2 font-bold text-8xl ">Axel</h1> */}</p>
        <h2 className=" text-[1.1rem] bg-gradient-to-b from-white via-white to-white bg-clip-text text-transparent text-transparent mt-16">Group work</h2>

   <div className="flex justify-between gap-4">
    
   <AnimatedTooltipPreview number="5" />

</div>
   {/*   <TextRevealCard
        text="Front-End Developer"
        revealText="Front-End Developer" /> */}
  
    </div>
  )
}
