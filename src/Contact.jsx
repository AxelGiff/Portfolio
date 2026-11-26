import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BadgeTextGradient from './BadgeGradient.tsx';

export default function Contact() {
  const { t, i18n } = useTranslation();
  const [copied, setCopied] = useState(false);
  const isFr = i18n.language?.startsWith('fr');

  const handleCopyDiscord = async () => {
    try {
      await navigator.clipboard.writeText('axl2223');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback ignored if clipboard unavailable
    }
  };

  return (
    <section id="contact-container" className="relative mt-48 pb-16 px-4">
      <BadgeTextGradient text={t('Contact')} />
      <h1 className="about-title text-white text-4xl sm:text-5xl block text-center mb-8">
        {t('Want to discuss ?')}
      </h1>

      <div className="flex justify-center mb-14">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-medium text-neutral-300 backdrop-blur-md">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          {isFr ? 'Disponible pour de nouvelles opportunités' : 'Open to new opportunities'}
        </span>
      </div>

      <div className="gradient-02 absolute z-[-1] right-3/4 left-1/4 bottom-0 w-1/2 h-[80%] opacity-30 pointer-events-none" />

      <div className="max-w-3xl mx-auto rounded-3xl border border-white/10 bg-neutral-950/60 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          <button
            type="button"
            onClick={handleCopyDiscord}
            aria-label={isFr ? 'Copier le pseudo Discord axl2223' : 'Copy Discord tag axl2223'}
            className="group relative flex flex-col items-start justify-between p-6 text-left transition duration-300 hover:bg-white/[0.04] cursor-pointer"
          >
            <div className="flex w-full items-center justify-between mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500 group-hover:text-neutral-300 transition">
                Discord
              </span>
              <span className="text-neutral-500 group-hover:text-sky-400 transition" aria-hidden="true">
                {copied ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                )}
              </span>
            </div>
            <div className="flex w-full items-baseline justify-between gap-2">
              <span className="text-base font-medium text-white tracking-tight">axl2223</span>
              <span className="text-xs text-sky-400 font-medium" aria-live="polite">
                {copied ? (isFr ? 'Copié' : 'Copied') : ''}
              </span>
            </div>
          </button>

          <a
            href="https://www.linkedin.com/in/axel-giffard/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-start justify-between p-6 text-left transition duration-300 hover:bg-white/[0.04]"
          >
            <div className="flex w-full items-center justify-between mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500 group-hover:text-neutral-300 transition">
                LinkedIn
              </span>
              <svg className="text-neutral-500 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
            <span className="text-base font-medium text-white group-hover:text-sky-300 transition tracking-tight">
              /in/axel-giffard
            </span>
          </a>

          <a
            href="mailto:giffard.axel95@gmail.com"
            className="group relative flex flex-col items-start justify-between p-6 text-left transition duration-300 hover:bg-white/[0.04]"
          >
            <div className="flex w-full items-center justify-between mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500 group-hover:text-neutral-300 transition">
                Email
              </span>
              <svg className="text-neutral-500 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
            <span className="text-sm sm:text-[15px] font-medium text-white group-hover:text-sky-300 transition tracking-tight break-all">
              giffard.axel95@gmail.com
            </span>
          </a>
        </div>
      </div>

      <footer className="mt-20 flex flex-col sm:flex-row items-center justify-between max-w-3xl mx-auto gap-4 text-xs text-neutral-500">
        <span>© {new Date().getFullYear()} Axel Giffard</span>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition"
        >
          <span>{isFr ? 'Haut de page' : 'Back to top'}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      </footer>
    </section>
  );
}
