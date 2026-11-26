import React from 'react';
import { useTranslation } from 'react-i18next';
import Technologies from '../Technologies.jsx';
import LandingRustAgent from './LandingRustAgent.jsx';
import AboutRustAgent from './AboutRustAgent.jsx';

export default function RustAgent() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center">
      <LandingRustAgent />
      <img
        src={new URL('./images/rustagent.webp', import.meta.url).href}
        alt={t('rustagent.imageAlt')}
        loading="lazy"
        className="-mt-6 sm:-mt-12 lg:-mt-16 -z-[-10] w-[92%] max-w-5xl h-auto object-cover shadow-lg sm:visible [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000 rounded-xl"
      />
      <Technologies
        iconsToShow={[
          'Rust',
          'Freya',
          'Tokio',
          'Tree-sitter',
          'LLM / SSE',
          'GitHub Actions',
        ]}
      />
      <AboutRustAgent />
    </div>
  );
}
