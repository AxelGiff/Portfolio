import React from 'react';
import { SpotlightPreview } from '../../pageSpotlight.tsx';
import TextShine from '../../TextShine.tsx';
import { useTranslation } from 'react-i18next';

export default function LandingRustAgent() {
  const { t } = useTranslation();

  return (
    <div className="relative overflow-x-clip flex flex-col items-center justify-center text-center min-h-[75vh] pt-28 pb-20 sm:pb-28 px-4 w-full font-inter z-10">
      <div className="gradient-cnn z-[-10000] -top-1/4 w-full h-full opacity-30" />
      <SpotlightPreview fill="cyan" />

      <div className="text-gradient-primary1 text-sm sm:text-lg font-bold mt-4 text-center max-w-4xl mx-auto">
        2026 | {t('rustagent.status')}
        <br />
        <TextShine text="RustAgent" />
      </div>

      <p className="mt-6 max-w-2xl text-sm sm:text-base text-neutral-300 leading-relaxed">
        {t('rustagent.tagline')}
      </p>
    </div>
  );
}
