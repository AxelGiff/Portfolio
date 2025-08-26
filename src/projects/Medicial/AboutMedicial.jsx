import React from 'react';
import ButtonRotatingBackgroundGradient from '../../ButtonRotatingBackgroundGradient.tsx';
import { useTranslation } from 'react-i18next';

export default function AboutMedicial() {
  const { t } = useTranslation();
  
  return (
    <section id="about-container">
      <h1 className="about-title text-white text-5xl block text-center mt-24 mb-32">
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
            width="2500"
            height="150"
            className="shadow-lg z-50 sm:visible [mask-image:linear-gradient(to_bottom,white,white,transparent)] 
                       transition duration-1000 rounded-lg relative bottom-8 opacity-100"
            style={{ color: 'transparent' }}
            src={new URL('./images/main3Chatbot.png', import.meta.url).href}
          />
        </div>

        {/* Text on the right with columns */}
  <div className="text flex flex-col items-center justify-center z-50 w-full xl:w-3/5 xl:pl-8 mt-8 xl:mt-0">
          <div
            className="
              p-8 
              bg-black/60 
              backdrop-blur-md 
              rounded-lg 
              shadow-lg 
              w-full 
              sm:w-[800px]
              text-white 
              columns-2 
              space-y-4
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
        src={new URL('../../images/glow.png', import.meta.url).href}
      />
      <div className="relative">
        <img
          alt="gradient"
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          className="h-[1000px] w-[1000px] z-[-1000] inset-0 object-cover absolute pointer-events-none select-none"
          style={{ height: '200vh', width: 'auto', left: '0', right: '0', top: '-540px', color: 'transparent' }}
          sizes="100vw"
          src={new URL('../../images/tech-features-gradient.webp', import.meta.url).href}
        />
      </div>

      <h1 className="about-title text-white text-5xl block text-center mt-24 mb-32">
        {t('Features')}
      </h1>
    </section>
  );
}
