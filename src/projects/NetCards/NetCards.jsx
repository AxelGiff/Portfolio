import React from 'react';

import LandingNetCards from './LandingNetCards.jsx';
import Technologies from '../Technologies.jsx';
import AboutNetCards from './AboutNetCards.jsx';
import Others from './Others.jsx';
import Deck from './Deck.jsx';

export default function PerformVision() {
  return (
    <div className="flex flex-col items-center justify-center ">
    <LandingNetCards />
    
    <img src={require("./images/Netcards.PNG")}  alt="screen todo list" loading="lazy" className="-mt-96 -z-[-10] shadow-lg w-[100%] h-[100%] sm:w-[1200px] sm:h-[650px]  sm:visible [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000 rounded-xl" />
    <Technologies iconsToShow={["HTML","CSS","MySQL","PHP","Figma"]} />
    <AboutNetCards />
    <Others />
    <Deck />
  </div>
  )
}
