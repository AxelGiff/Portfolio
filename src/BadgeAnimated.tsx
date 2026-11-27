import React from 'react';
import { useTranslation } from 'react-i18next';

const BadgeAnimatedGradientBorder = () => {
  const { t } = useTranslation();

  return (
    <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 animate-[spin_2.5s_linear_infinite] will-change-transform bg-[conic-gradient(from_90deg_at_50%_50%,#387ADF_0%,#FFFF_50%,#387ADF_100%)]"
      />
      <span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-gray-950 px-6 py-1.5 text-xs font-bold text-gray-50">
        {t('Full Stack Developer')}
      </span>
    </span>
  );
};

export default BadgeAnimatedGradientBorder;
