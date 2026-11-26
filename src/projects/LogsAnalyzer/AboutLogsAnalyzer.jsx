import React from 'react';
import ButtonRotatingBackgroundGradient from '../../ButtonRotatingBackgroundGradient.tsx';
import { useTranslation } from 'react-i18next';

const sectionKeys = ['overview', 'goal', 'architecture', 'future'];

const featureKeys = [
  'formats',
  'coloring',
  'filtering',
  'tail',
  'cli',
  'performance',
];

export default function AboutLogsAnalyzer() {
  const { t } = useTranslation();

  return (
    <section id="about-container" className="w-full relative">
      <h1 className="about-title text-white text-3xl sm:text-4xl lg:text-5xl block text-center mt-16 sm:mt-24 mb-12 sm:mb-16 px-4">
        {t('Zoom-in')}
      </h1>

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="gradient-qualabout z-[-10000] right-1/4 -top-1/8 w-1/2 h-full opacity-30 pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {sectionKeys.map((key) => (
            <div key={key}>
              <h2 className="text-lg font-semibold text-white mb-2.5">
                {t(`logsanalyzer.${key}.title`)}
              </h2>
              <p className="text-[15px] text-neutral-300 leading-relaxed">
                {t(`logsanalyzer.${key}.description`)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <ButtonRotatingBackgroundGradient
            text={t('Github')}
            link="https://github.com/AxelGiff/LogsAnalyzer"
          />
        </div>
      </div>

      {/* Decorative glow */}
      <img
        alt=""
        aria-hidden="true"
        loading="lazy"
        width="500"
        height="500"
        decoding="async"
        className="absolute right-0 top-1/8 pointer-events-none select-none"
        style={{ color: 'transparent' }}
        src={new URL('../../images/glow.webp', import.meta.url).href}
      />

      {/* Key features */}
      <h2 className="about-title text-white text-3xl sm:text-4xl lg:text-5xl block text-center mt-24 sm:mt-28 mb-14 px-4">
        {t('Features')}
      </h2>

      <div className="max-w-5xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
        {featureKeys.map((key) => (
          <div key={key} className="border-t border-white/15 pt-5">
            <h3 className="text-base font-semibold text-white mb-2">
              {t(`logsanalyzer.features.${key}.title`)}
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {t(`logsanalyzer.features.${key}.description`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
