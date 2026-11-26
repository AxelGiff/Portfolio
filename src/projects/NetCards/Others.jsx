import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Others() {
  const { t } = useTranslation();
  
  return (
    <div className='flex flex-col items-center justify-center sm:flex-row items-center gap-12 mx-4 sm:mx-12 lg:mx-24 xl:mx-36 my-12 sm:mt-0 sm:gap-24'>
      <div>
        <h2 className='about-title text-white text-5xl block  text-center block mt-24 mb-12'>
          {t('netcards.auth.title')}
        </h2>
        <h2 className='about-title text-white italic text-xl  leading-2 mb-24'>
          {t('netcards.auth.description')}
        </h2>
      </div>
      
      <img 
        src={new URL("./images/sinscrire.webp", import.meta.url).href} 
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
