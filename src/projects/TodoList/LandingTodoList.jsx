import React from 'react'
import { SpotlightPreview } from '../../pageSpotlight.tsx';
import TextShine from '../../TextShine.tsx'; 

import {AnimatedTooltipPreview} from "../PerformVision/tooltip.tsx";

export default function LandingPage() {
  return (
    
    <div className="flex mb-40 -mt-24 font-inter flex-col items-center justify-center h-screen z-10">
      <div class="gradient-pv z-[-10000]  -top-1/4 w-full h-full opacity-30"></div>
            <SpotlightPreview fill="cyan" />
         
        <p className="text-gradient-primary1 text-[1.2rem] font-bold relative right-2 mt-6">2023 | One week <br></br>  <TextShine text="Todo List" />{/* <h1 className="text-gradient-primary2 font-bold text-8xl ">Axel</h1> */}</p>
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
