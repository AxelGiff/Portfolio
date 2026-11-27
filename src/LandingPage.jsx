import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import Avatar from './Avatar.jsx';
import { SpotlightPreview } from './pageSpotlight.tsx';
import TextShine from './TextShine.tsx';
import BadgeAnimatedGradientBorder from "./BadgeAnimated.tsx";
import ScrollDownButton from "./ScrollDownButton.jsx";
import ButtonGithub from "./ButtonGithub.jsx";
import cvPdf from './images/AXEL-GIFFARD_CV.pdf';
import { smoothScrollTo } from './utils/smoothScroll.js';
 
const AnimatedSquare = memo(() => (
  <span className="relative inline-flex items-center justify-center w-6 h-6" aria-hidden="true">
    <span className="absolute w-3.5 h-3.5 border border-[#387ADF]/90 animate-[spin_3s_linear_infinite] will-change-transform" />
    <span className="absolute inset-0 flex items-center justify-center rotate-45">
      <span className="w-3.5 h-3.5 border border-[#387ADF]/90 animate-[spin_3s_linear_infinite_reverse] will-change-transform" />
    </span>
  </span>
));

const socialLinks = [
  {
    label: "GitHub — Axel Giffard",
    link: "https://github.com/AxelGiff",
    svg: (
      <svg fill="white" viewBox="0 0 496 512" height="1.6em">
        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
      </svg>
    )
  },
  {
    label: "LinkedIn — Axel Giffard",
    link: "https://www.linkedin.com/in/axel-giffard-b45208220/",
    svg: (
      <svg
        viewBox="0 0 448 512"
        height="1.6em"
        xmlns="http://www.w3.org/2000/svg"
        className="svgIcon"
        fill="white"
      >
        <path
          d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
        ></path>
      </svg>
    )
  }
];

const LandingPage = memo(() => {
  const { t, i18n } = useTranslation();
  const isFr = i18n.language?.startsWith('fr');

  const scrollToProjects = () => {
    smoothScrollTo('#project-container');
  };

  return (
    <section
      aria-label={isFr ? 'Présentation' : 'Introduction'}
      className="relative overflow-x-clip flex mb-12 sm:mb-28 pt-16 sm:pt-24 pb-10 sm:pb-16 px-5 sm:px-4 font-inter flex-col items-center justify-center min-h-[100svh] z-10 text-center"
    >
      <div aria-hidden="true" className="ambient-tech-glow absolute -inset-y-16 inset-x-0 -z-10" />
      <SpotlightPreview fill="white" />

      <div className="subtitle hidden md:block" aria-hidden="true">
        <span className="subtitle-content">
          <span>
            <AnimatedSquare />
          </span>
          <span className="line">{t('Hover me')}</span>
        </span>
      </div>

      <Avatar />

      <div className="text-gradient-primary1 text-[1rem] font-bold mt-6">
        <span className="block mb-1">{t("Hi! I'm")}</span>
        <TextShine text="Axel" />
      </div>

      <div className="mt-4">
        <BadgeAnimatedGradientBorder />
      </div>

      <p className="mt-5 max-w-xl text-sm sm:text-base text-neutral-300 leading-relaxed">
        {isFr ? (
          <>
            Apprenti Concepteur-Développeur à la{' '}
            <strong className="text-white font-semibold underline decoration-sky-400/85 decoration-2 underline-offset-[4px]">
              Préfecture de Police de Paris
            </strong>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> · </span>
            Étudiant en{' '}
            <strong className="text-white font-semibold underline decoration-sky-400/85 decoration-2 underline-offset-[4px]">
              Master informatique - Logiciels Sûrs (UPEC)
            </strong>
            .
          </>
        ) : (
          <>
            Software Engineer Apprentice at{' '}
            <strong className="text-white font-semibold underline decoration-sky-400/85 decoration-2 underline-offset-[4px]">
              Préfecture de Police de Paris
            </strong>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> · </span>
            Student in{' '}
            <strong className="text-white font-semibold underline decoration-sky-400/85 decoration-2 underline-offset-[4px]">
              MSc Reliable Software (UPEC)
            </strong>
            .
          </>
        )}
      </p>

      {/* Primary actions for instant recruiter access */}
      <div className="mt-7 w-full max-w-xs sm:max-w-none sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
        <button
          type="button"
          onClick={scrollToProjects}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 sm:py-2.5 min-h-[48px] sm:min-h-0 text-sm font-semibold text-black transition hover:bg-neutral-200 active:scale-[0.98] cursor-pointer"
        >
          <span>{isFr ? 'Voir mes projets' : 'View projects'}</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <a
          href={cvPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 sm:py-2.5 min-h-[48px] sm:min-h-0 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/[0.08] active:scale-[0.98]"
        >
          <span>{isFr ? 'Télécharger mon CV' : 'Download CV'}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </a>
      </div>

      <div className="flex justify-center gap-4">
        {socialLinks.map((social, index) => (
          <ButtonGithub
            key={index}
            link={social.link}
            svg={social.svg}
            label={social.label}
          />
        ))}
      </div>

      <div className="hidden sm:block">
        <ScrollDownButton />
      </div>
    </section>
  );
});

export default LandingPage;
