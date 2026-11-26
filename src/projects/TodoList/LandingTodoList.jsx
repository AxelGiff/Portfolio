import React from 'react'
import { SpotlightPreview } from '../../pageSpotlight.tsx';
import TextShine from '../../TextShine.tsx'; 
import { useTranslation } from 'react-i18next'; 

import {AnimatedTooltipPreview} from "../PerformVision/tooltip.tsx";

export default function LandingPage() {
  const { t } = useTranslation(); 

  return (
    
    <div className="relative overflow-x-clip flex flex-col items-center justify-center text-center min-h-[75vh] pt-28 pb-20 sm:pb-28 px-4 w-full font-inter z-10">
      <div className="gradient-pv z-[-10000]  -top-1/4 w-full h-full opacity-30"></div>
            <SpotlightPreview fill="cyan" />
         
        <div className="text-gradient-primary1 text-sm sm:text-lg font-bold mt-4 text-center max-w-4xl mx-auto">2023 | {t('todolist.oneweek')} <br></br>  <TextShine text="Todo List" />{/* <h1 className="text-gradient-primary2 font-bold text-8xl ">Axel</h1> */}</div>
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
