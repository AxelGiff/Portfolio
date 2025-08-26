import React from 'react'
import { useTranslation } from 'react-i18next';

import BadgeTextGradient from './BadgeGradient.tsx';
import IconCafeOutline from './lib/icons/cafe.jsx';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact-container" className="relative mt-48">
      <BadgeTextGradient text={t('Contact')} />
      <h1 className='about-title text-white text-5xl block text-center mb-32'>
        {t('Want to discuss ?')}
      </h1>
      <div className="gradient-02 absolute z-[-1] right-3/4 left-1/4 bottom-0 w-1/2 h-[80%] opacity-30"></div>

     
    <div className="flex flex-row justify-center items-start gap-16 mt-10  text-white text-xl">
      <div className="flex flex-col items-center mb-10">
        <span className="font-bold mb-2">Discord</span>
        <span>axl2223</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-bold mb-2">LinkedIn</span>
        <a href="https://www.linkedin.com/in/axel-giffard/" target="_blank" rel="noopener noreferrer" className="underline text-blue-400 hover:text-blue-600">linkedin.com/in/axelgiff</a>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-bold mb-2">Email</span>
        <a href="mailto:giffard.axel95@gmail.com" className="underline text-blue-400 hover:text-blue-600">giffard.axel95@gmail.com</a>
      </div>
    </div>
    </section>
  )
}
