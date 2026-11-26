import React from 'react';
import { useTranslation } from 'react-i18next';

const CardContainer = () => {
  const { t } = useTranslation();

  return (
    <div
      role="tooltip"
      className="pointer-events-none absolute z-50 w-[280px] sm:w-[320px] top-full mt-3 left-1/2 -translate-x-1/2 md:top-1/2 md:mt-0 md:left-full md:ml-6 md:translate-x-0 md:-translate-y-1/2 rounded-2xl border border-white/15 bg-neutral-950/90 px-6 py-5 backdrop-blur-xl shadow-2xl text-white"
    >
      <div className="card-content text-center md:text-left">
        <h3 className="text-sm font-semibold text-sky-400 tracking-wide mb-2 font-Inter">
          {t('Brief presentation')}
        </h3>
        <p className="text-sm leading-relaxed italic text-neutral-200 font-Inter">
          “{t('card_container')}”
        </p>
      </div>
    </div>
  );
};

export default CardContainer;
