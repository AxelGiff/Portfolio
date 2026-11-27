import React from 'react';
import ButtonRotatingBackgroundGradient from '../../ButtonRotatingBackgroundGradient.tsx';
import { useTranslation } from 'react-i18next';

export default function AboutMedicial() {
  const { t } = useTranslation();
  
  return (
    <section id="about-container" className="relative overflow-x-clip w-full">
      <h1 className="about-title text-white text-3xl sm:text-4xl lg:text-5xl block text-center mt-16 sm:mt-24 mb-12 sm:mb-20 px-4">
        {t('Zoom-in')}
      </h1>

  <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-16 px-2 xl:px-12 py-8 w-full">
        <div className="gradient-qualabout z-[-10000] right-1/4 -top-1/8 w-1/2 h-full opacity-30"></div>

        {/* Image on the left */}
  <div className="relative w-full xl:w-2/5 h-auto flex-shrink-0">
          <div className="gradient-03 right-1/4 -top-1/8 w-1/2 h-full z-[-10000] opacity-70"></div>
          <img
            alt="Product Preview"
            loading="lazy"
            decoding="async"
            className="shadow-lg z-50 sm:visible [mask-image:linear-gradient(to_bottom,white,white,transparent)] 
                       transition duration-1000 rounded-lg relative bottom-8 opacity-100 w-full h-auto"
            style={{ color: 'transparent' }}
            src={new URL('./images/main3Chatbot.webp', import.meta.url).href}
          />
        </div>

        {/* Text on the right with columns */}
  <div className="text flex flex-col items-center justify-center z-50 w-full xl:w-3/5 xl:pl-8 mt-8 xl:mt-0">
          <div
            className="
              p-6 sm:p-8
              bg-black/80
              rounded-2xl
              shadow-lg
              w-full
              max-w-3xl
              text-white
              grid
              grid-cols-1
              md:grid-cols-2
              gap-6
              leading-relaxed
            "
          >
            <p>
              <strong>{t('cnn.overview.title')}</strong><br/>
              {t('medicial.overview.description')}
            </p>

            <p>
              <strong>{t('cnn.goal.title')}</strong><br/>
              {t('medicial.goal.description')}
            </p>

            <p>
              <strong>{t('cnn.fullstack.title')}</strong><br/>
              {t('medicial.fullstack.description')}
            </p>

            <p>
              <strong>{t('cnn.future.title')}</strong><br/>
              {t('medicial.future.description')}
            </p>
          </div>

          <div className="mt-8">
            <ButtonRotatingBackgroundGradient
              text={t('Github')}
              link="https://github.com/AxelGiff/Medic.ial-Chatbot-SAE-S6"
            />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <img
        alt="left gradient"
        loading="lazy"
        width="500"
        height="500"
        decoding="async"
        data-nimg="1"
        className="absolute right-0 top-1/8"
        style={{ color: 'transparent' }}
        src={new URL('../../images/glow.webp', import.meta.url).href}
      />
      <div className="relative">
        <div aria-hidden="true" className="ambient-tech-glow absolute -top-64 inset-x-0 mx-auto w-full max-w-6xl h-[620px] -z-10" />
      </div>

      <h1 className="about-title text-white text-3xl sm:text-4xl lg:text-5xl block text-center mt-16 sm:mt-24 mb-12 sm:mb-20 px-4">
        {t('Features')}
      </h1>
    </section>
  );
}
