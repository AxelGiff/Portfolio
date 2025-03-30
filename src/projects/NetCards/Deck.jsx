import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Deck() {
  const { t } = useTranslation();
  
  return (
    <div className='flex flex-col items-center justify-center sm:flex-row items-center gap-12 sm:m-48 sm:mt-0 sm:gap-24'>
      <img 
        src={new URL("./images/netcards4.png", import.meta.url).href} 
        width={1000} 
        height={650} 
        alt={t('netcards.deck.imageAlt')} 
        loading="lazy" 
        className="translate-x-1.5 flex justify-center items-center -z-[-10] sm:ml-24 shadow-lg sm:visible [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000 rounded-xl" 
      />

      <div>
        <h2 className='about-title text-white text-5xl block mr-24 xl:mr-48 text-center block mt-24 mb-12'>
          {t('netcards.deck.title')}
        </h2>
        <h2 className='about-title text-white italic text-xl xl:mr-12 leading-snug mb-24'>
          {t('netcards.deck.description')}
        </h2>
      </div>

      <div></div>
    </div>
  );
}
