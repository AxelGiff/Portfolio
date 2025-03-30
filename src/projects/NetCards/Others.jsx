import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Others() {
  const { t } = useTranslation();
  
  return (
    <div className='flex flex-col items-center justify-center sm:flex-row items-center gap-12 m-64 xl:m-48 sm:mt-0 sm:gap-24'>
      <div>
        <h2 className='about-title text-white text-5xl block ml-8 xl:ml-56 text-center block mt-24 mb-12'>
          {t('netcards.auth.title')}
        </h2>
        <h2 className='about-title text-white italic text-xl ml-16 xl:ml-64 leading-2 mb-24'>
          {t('netcards.auth.description')}
        </h2>
      </div>
      
      <img 
        src={new URL("./images/sinscrire.png", import.meta.url).href} 
        width={1100} 
        height={650} 
        alt={t('netcards.auth.imageAlt')} 
        loading="lazy" 
        className="flex justify-center items-center -z-[-10] shadow-lg sm:visible translate-x-1.5 [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000 rounded-xl" 
      />
      
      <div></div>
    </div>
  );
}
