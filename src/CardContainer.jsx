import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const CardContainer = () => {

  const { t } = useTranslation();

  return (

<div className="w-[400px] z-[956] sm:z-[-1000] h-[200px] min-h-[200px] sm:ml-40 arriere absolute top-32 sm:top-60 transform sm:translate-x-48 letter-spacing-1 text-white bg-hsla-45-17-95-80 backdrop-blur-xl backdrop-saturate-17 backdrop-filter-contrast-170 backdrop-filter px-10 border border-gray-800 animate-border-width bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000 bottom-0 rounded-2xl flex items-center justify-center">
      
            <div className="card-content">
              <h3 className="card-title top-0 text-[#387bdf] font-Inter">{t("Brief presentation")}</h3>
              <p className="card-text text-center leading-10 italic font-thin font-Inter">
                “{t("card_container")}“</p>
            </div>
        </div>
/*       
.card{
    width: 300px;
    height: 20px;
    position: absolute;
    top: 20%;
    left: 50%;
    letter-spacing: 1px;
    color:rgb(4, 58, 51);
    background: hsla(45, 17%, 95%, .8);
    backdrop-filter: blur(20px) saturate(1.7);
    -webkit-backdrop-filter: blur(20px) saturate(1.7);    
      padding: 40px 56px 40px 56px;
      min-height: 200px;
      box-shadow: black 10px;
      bottom: 0px;
      border-radius: 10px;
  } */
  
  );
};

export default CardContainer;
