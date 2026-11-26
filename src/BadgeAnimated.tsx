import React from 'react';
import { useTranslation } from 'react-i18next';

const BadgeAnimatedGradientBorder = () => {
  const { t } = useTranslation();

  return (
    <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
      <span
        aria-hidden="true"
        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#387ADF_0%,#FFFF_50%,#387ADF_100%)]"
      />
      <span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-gray-950 px-6 py-1.5 text-xs font-bold text-gray-50 backdrop-blur-3xl">
        {t('Full Stack Developer')}
      </span>
    </span>
  );
};

export default BadgeAnimatedGradientBorder;
