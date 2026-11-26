import React from 'react';
import { useTranslation } from 'react-i18next';
import Technologies from '../Technologies.jsx';
import LandingLogsAnalyzer from './LandingLogsAnalyzer.jsx';
import AboutLogsAnalyzer from './AboutLogsAnalyzer.jsx';

export default function LogsAnalyzer() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center">
      <LandingLogsAnalyzer />
      <img
        src={new URL('./images/logsanalyzer.webp', import.meta.url).href}
        alt={t('logsanalyzer.imageAlt')}
        loading="lazy"
        className="-mt-6 sm:-mt-12 lg:-mt-16 -z-[-10] w-[92%] max-w-5xl h-auto object-cover shadow-lg sm:visible [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000 rounded-xl"
      />
      <Technologies
        iconsToShow={[
          'Rust',
          'Clap',
          'Regex',
          'Notify',
          'Chrono',
        ]}
      />
      <AboutLogsAnalyzer />
    </div>
  );
}
