import React, { memo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import paperPlaneIcon from './images/icons8-paper-plane-50.webp';

function renderHighlightedLine(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong
          key={i}
          className="text-white font-semibold underline decoration-sky-400/85 decoration-2 underline-offset-[3px]"
        >
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

const milestones = [
  {
    id: 'highschool',
    dateFr: '2018 – 2021',
    dateEn: '2018 – 2021',
    type: 'academic',
    titleFr: 'Lycée',
    titleEn: 'High School',
    placeFr: 'Informatique & Hardware',
    placeEn: 'IT & Hardware',
    keywordsFr: 'PC · Premiers pas en code',
    keywordsEn: 'PC · First steps in code',
    detailsFr: [
      '**Montage et dépannage PC**, création de **montages photo/vidéo**.',
      'Découverte approfondie de l’**informatique** et premiers pas vers la **programmation**.',
    ],
    detailsEn: [
      '**PC hardware building**, troubleshooting, and **photo/video editing**.',
      'Deep interest in **computing** and first steps into **programming**.',
    ],
    y: 155,
    side: 'bottom',
  },
  {
    id: 'l1',
    dateFr: '2022 – 2023',
    dateEn: '2022 – 2023',
    type: 'academic',
    titleFr: 'Licence 1 Info',
    titleEn: 'BSc CS (Y1)',
    placeFr: 'Sorbonne Paris Nord',
    placeEn: 'Sorbonne Paris Nord',
    keywordsFr: 'C · Algo · Unix · Web',
    keywordsEn: 'C · Algo · Unix · Web',
    detailsFr: [
      'Bases solides en **programmation C**, **algorithmique** et **algèbre linéaire**.',
      'Environnement **Unix** et premières bases du **développement web**.',
    ],
    detailsEn: [
      'Core foundations in **C programming**, **algorithms**, and **linear algebra**.',
      '**Unix** environment and **web development** fundamentals.',
    ],
    y: 62,
    side: 'top',
  },
  {
    id: 'but',
    dateFr: '2023 – 2025',
    dateEn: '2023 – 2025',
    type: 'academic',
    titleFr: 'BUT Informatique',
    titleEn: 'BUT Computer Science',
    placeFr: 'IUT Villetaneuse',
    placeEn: 'IUT Villetaneuse',
    keywordsFr: 'Full-Stack · IA · BDD',
    keywordsEn: 'Full-Stack · AI · DB',
    detailsFr: [
      'Parcours Réalisation d’applications : **développement web/mobile**, **architecture logicielle** et **tests**.',
      '**Bases de données**, **réseaux/conteneurisation**, **Machine Learning & Deep Learning**.',
      'Nombreux projets en équipe (**SAE**) en conditions réelles.',
    ],
    detailsEn: [
      'Application Engineering track: **web/mobile development**, **software architecture**, and **testing**.',
      '**Databases**, **networking/containerization**, **Machine Learning & Deep Learning**.',
      'Hands-on team projects (**SAE**) simulating production delivery.',
    ],
    y: 178,
    side: 'bottom',
  },
  {
    id: 'levelup',
    dateFr: 'Jan. – Mars 2024',
    dateEn: 'Jan – Mar 2024',
    type: 'pro',
    titleFr: 'Stage Dév. Web',
    titleEn: 'Web Dev Intern',
    shortPlaceFr: 'Level Up Tech',
    shortPlaceEn: 'Level Up Tech',
    placeFr: 'Level Up Tech Consulting · Paris',
    placeEn: 'Level Up Tech Consulting · Paris',
    keywordsFr: 'RPA IA · Refonte web',
    keywordsEn: 'AI RPA · Web redesign',
    detailsFr: [
      'Intégration de solutions **RPA par IA**.',
      '**Refonte** et maintenance du site web, **gestion de projet** (**Notion**, **Slack**, **WordPress**).',
    ],
    detailsEn: [
      'Integration of **AI-assisted RPA** workflows.',
      'Company website **redesign**, maintenance, and **project management** (**Notion**, **Slack**, **WordPress**).',
    ],
    y: 44,
    side: 'top',
  },
  {
    id: 'pref-2024',
    dateFr: 'Sept. 2024 – Sept. 2025',
    dateEn: 'Sept. 2024 – Sept. 2025',
    type: 'pro',
    titleFr: 'Apprenti Chargé de Projet Web',
    titleEn: 'Web Project Apprentice',
    shortPlaceFr: 'Préfecture de Police',
    shortPlaceEn: 'Préfecture de Police',
    placeFr: 'Préfecture de Police (EM-DSPAP) · Paris',
    placeEn: 'Préfecture de Police (EM-DSPAP) · Paris',
    keywordsFr: 'Symfony · Nuxt / TS · ETL',
    keywordsEn: 'Symfony · Nuxt / TS · ETL',
    detailsFr: [
      'Développement **front-end et back-end** d’une application web d’aide à la décision (**Symfony 6.4**, **API Platform**, **Nuxt / TypeScript**).',
      'Extraction, traitement et modélisation des données (**ETL**) pour alimenter les outils de pilotage.',
      'Recueil des **besoins métiers et techniques** avec les services transverses.',
    ],
    detailsEn: [
      '**Full-stack** development of a decision-support web app (**Symfony 6.4**, **API Platform**, **Nuxt / TypeScript**).',
      '**ETL** data extraction, processing, and modeling for executive dashboards.',
      'Cross-functional **business & technical requirements** gathering.',
    ],
    y: 162,
    side: 'bottom',
  },
  {
    id: 'master',
    dateFr: 'Depuis sept. 2025',
    dateEn: 'Since Sept. 2025',
    type: 'academic',
    titleFr: 'Master Logiciels Sûrs',
    titleEn: 'MSc Reliable Software',
    shortPlaceFr: 'UPEC · Créteil',
    shortPlaceEn: 'UPEC · Créteil',
    placeFr: 'UPEC · Créteil (LACL)',
    placeEn: 'UPEC · Créteil (LACL)',
    keywordsFr: 'Systèmes critiques · Preuves',
    keywordsEn: 'Critical systems · Proofs',
    detailsFr: [
      'Formation adossée au laboratoire **LACL** : conception et validation de **logiciels à haute fiabilité**.',
      '**Programmation bas niveau**, **concurrence**, **systèmes répartis** et architectures réseau.',
      '**Vérification formelle**, **preuve de programmes** et paradigmes de langages sûrs.',
    ],
    detailsEn: [
      'Backed by the **LACL** research lab: designing and verifying **high-reliability software**.',
      '**Low-level programming**, **concurrency**, **distributed systems**, and network architectures.',
      '**Formal verification**, **program proofs**, and safe language paradigms.',
    ],
    y: 58,
    side: 'top',
    current: true,
  },
  {
    id: 'pref-2025',
    dateFr: 'Depuis sept. 2025',
    dateEn: 'Since Sept. 2025',
    type: 'pro',
    titleFr: 'Apprenti Concepteur-Développeur',
    titleEn: 'Software Engineer Apprentice',
    shortPlaceFr: 'Préfecture de Police',
    shortPlaceEn: 'Préfecture de Police',
    placeFr: 'Préfecture de Police (EM-DSPAP/SATN/BALD) · Paris',
    placeEn: 'Préfecture de Police (EM-DSPAP/SATN/BALD) · Paris',
    keywordsFr: 'PHP 8 / Symfony 7 · SSO · CI/CD',
    keywordsEn: 'PHP 8 / Symfony 7 · SSO · CI/CD',
    detailsFr: [
      '**Sécurité applicative** : authentification **SSO et JWT**, contrôle d’accès, **chiffrement des secrets** et conformité **SSI**.',
      'Migration de **monolithes legacy** vers des architectures d’API modernes sous **PHP 8 / Symfony 7**.',
      'Cycle **Agile**, revue de code, pipelines **CI/CD GitLab** (build, tests, déploiement) et mise en production.',
    ],
    detailsEn: [
      '**Application security**: **SSO & JWT** authentication, access control, **secrets encryption**, and **InfoSec** compliance.',
      'Migration of **legacy monoliths** to modern **PHP 8 / Symfony 7** API architectures.',
      '**Agile** workflow, code reviews, **GitLab CI/CD** pipelines (build, tests, deployment), and production rollouts.',
    ],
    y: 142,
    side: 'bottom',
    current: true,
  },
];

const VIEW_W = 1400;
const VIEW_H = 220;

function buildWavePath(points) {
  if (points.length === 0) return '';
  if (points.length === 1) return `M 0 ${points[0].y} L ${VIEW_W} ${points[0].y}`;
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i += 1) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const midX = (p0.x + p1.x) / 2;
    d += ` C ${midX} ${p0.y}, ${midX} ${p1.y}, ${p1.x} ${p1.y}`;
  }
  return d;
}

export default memo(function History() {
  const { i18n } = useTranslation();
  const isFr = i18n.language?.startsWith('fr');
  const [filter, setFilter] = useState('all'); // 'all' | 'academic' | 'pro'
  const [activeId, setActiveId] = useState('pref-2025');

  const toggleFilter = (type) => {
    setFilter((prev) => (prev === type ? 'all' : type));
  };

  const visibleMilestones =
    filter === 'all'
      ? milestones
      : milestones.filter((m) => m.type === filter);

  const colW = VIEW_W / Math.max(1, visibleMilestones.length);
  const wavePoints = visibleMilestones.map((m, idx) => ({
    ...m,
    side: filter === 'all' ? m.side : idx % 2 === 0 ? 'bottom' : 'top',
    y:
      filter === 'all'
        ? m.y
        : idx % 2 === 0
          ? idx === 0
            ? 155
            : 165
          : idx === 1
            ? 55
            : 65,
    x: (idx + 0.5) * colW,
  }));
  const wavePathD = buildWavePath(wavePoints);

  const activeItem =
    visibleMilestones.find((m) => m.id === activeId) ??
    visibleMilestones[visibleMilestones.length - 1];
  const isActivePro = activeItem.type === 'pro';

  return (
    <section
      id="parcours-section"
      aria-label="Road Trip"
      className="relative overflow-x-clip [contain:layout_style] my-16 sm:my-28 lg:my-36 py-8 sm:py-12 px-4 sm:px-8"
    >
      {/* Ambient radial lights */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-40 -left-52 w-[760px] h-[720px] sm:w-[1150px] sm:h-[820px] opacity-80 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(56, 189, 248, 0.22) 0%, rgba(56, 189, 248, 0.18) 18%, rgba(56, 189, 248, 0.12) 36%, rgba(167, 139, 250, 0.065) 54%, rgba(167, 139, 250, 0.028) 72%, rgba(167, 139, 250, 0.008) 88%, transparent 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[115%] max-w-[90rem] h-[660px] opacity-80 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(56, 189, 248, 0.14) 0%, rgba(125, 165, 250, 0.115) 20%, rgba(167, 139, 250, 0.08) 38%, rgba(167, 139, 250, 0.042) 56%, rgba(167, 139, 250, 0.016) 74%, rgba(56, 189, 248, 0.005) 88%, transparent 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute -bottom-44 -right-52 w-[720px] h-[700px] sm:w-[1080px] sm:h-[800px] opacity-80 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(251, 191, 36, 0.17) 0%, rgba(251, 191, 36, 0.135) 18%, rgba(251, 191, 36, 0.085) 36%, rgba(167, 139, 250, 0.045) 54%, rgba(167, 139, 250, 0.018) 72%, rgba(167, 139, 250, 0.005) 88%, transparent 100%)',
        }}
      />

      <div className="max-w-[92rem] mx-auto relative">
        {/* Header + Interactive Filter Legend */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 lg:mb-14">
          <div className="flex items-center gap-3">
            <img src={paperPlaneIcon} alt="" width="30" height="30" />
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Road Trip
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 text-sm">
            <button
              type="button"
              onClick={() => toggleFilter('academic')}
              aria-pressed={filter === 'academic'}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 min-h-[40px] text-xs sm:text-sm font-medium transition cursor-pointer active:scale-95 ${
                filter === 'academic'
                  ? 'border-violet-400/80 bg-violet-500/25 text-white'
                  : 'border-white/20 bg-white/[0.04] text-white hover:border-violet-400/60'
              }`}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-violet-400" aria-hidden="true" />
              {isFr ? 'Formation' : 'Education'}
            </button>

            <button
              type="button"
              onClick={() => toggleFilter('pro')}
              aria-pressed={filter === 'pro'}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 min-h-[40px] text-xs sm:text-sm font-medium transition cursor-pointer active:scale-95 ${
                filter === 'pro'
                  ? 'border-amber-400/80 bg-amber-500/25 text-white'
                  : 'border-white/20 bg-white/[0.04] text-white hover:border-amber-400/60'
              }`}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
              {isFr ? 'Expérience pro' : 'Experience'}
            </button>

            <span className="hidden lg:inline text-xs text-neutral-500 ml-1">
              {isFr ? 'Survolez une étape pour les détails' : 'Hover a step for details'}
            </span>
          </div>
        </div>

        {/* Desktop: Full-width non-constant wave (zero horizontal scroll) */}
        <div className="hidden lg:block relative">
          {/* Top labels (positioned directly over each crest with generous width) */}
          <div className="relative w-full h-[116px] mb-1">
            {wavePoints.map((item, idx) => {
              if (item.side !== 'top') return null;
              const isPro = item.type === 'pro';
              const isSelected = activeId === item.id;
              const leftPct = (item.x / VIEW_W) * 100;
              const alignClass =
                idx === 0
                  ? 'left-0 translate-x-0 text-left'
                  : idx === wavePoints.length - 1
                    ? 'right-0 translate-x-0 text-right'
                    : '-translate-x-1/2 text-center';
              const posStyle =
                idx === 0
                  ? { left: '0%' }
                  : idx === wavePoints.length - 1
                    ? { right: '0%' }
                    : { left: `${leftPct}%` };
              return (
                <button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => setActiveId(item.id)}
                  onFocus={() => setActiveId(item.id)}
                  onClick={() => setActiveId(item.id)}
                  aria-pressed={isSelected}
                  style={posStyle}
                  className={`absolute bottom-0 w-[250px] px-2 py-2 rounded-xl transition cursor-pointer ${alignClass} ${
                    isSelected ? '-translate-y-1' : 'hover:-translate-y-1'
                  }`}
                >
                  <span className="block font-mono text-[11px] text-neutral-400 mb-1">
                    {isFr ? item.dateFr : item.dateEn}
                  </span>
                  <span className="block text-[15px] font-semibold leading-snug text-white [text-wrap:balance]">
                    {isFr ? item.titleFr : item.titleEn}
                  </span>
                  <span className="block text-xs text-neutral-300 mt-0.5">
                    {isFr ? (item.shortPlaceFr || item.placeFr) : (item.shortPlaceEn || item.placeEn)}
                  </span>
                  <span
                    className={`block text-[11px] font-medium mt-1 ${
                      isPro ? 'text-amber-300' : 'text-sky-300'
                    }`}
                  >
                    {isFr ? item.keywordsFr : item.keywordsEn}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Wave SVG + interactive nodes */}
          <div className="relative w-full h-[220px]">
            <svg
              viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
              preserveAspectRatio="none"
              className="w-full h-full overflow-visible"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="roadtrip-wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(56,189,248,0.65)" />
                  <stop offset="40%" stopColor="#38BDF8" />
                  <stop offset="75%" stopColor="#C084FC" />
                  <stop offset="100%" stopColor="#FBBF24" />
                </linearGradient>
              </defs>

              <path
                d={wavePathD}
                fill="none"
                stroke="url(#roadtrip-wave-grad)"
                strokeWidth="48"
                strokeOpacity="0.045"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d={wavePathD}
                fill="none"
                stroke="url(#roadtrip-wave-grad)"
                strokeWidth="26"
                strokeOpacity="0.10"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d={wavePathD}
                fill="none"
                stroke="url(#roadtrip-wave-grad)"
                strokeWidth="12"
                strokeOpacity="0.22"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d={wavePathD}
                fill="none"
                stroke="url(#roadtrip-wave-grad)"
                strokeWidth="5"
                strokeOpacity="0.38"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d={wavePathD}
                fill="none"
                stroke="url(#roadtrip-wave-grad)"
                strokeWidth="3"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* Interactive milestone nodes pinned on the wave */}
            {wavePoints.map((item) => {
              const isPro = item.type === 'pro';
              const isSelected = activeId === item.id;
              const leftPct = (item.x / VIEW_W) * 100;
              const topPct = (item.y / VIEW_H) * 100;
              return (
                <button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => setActiveId(item.id)}
                  onFocus={() => setActiveId(item.id)}
                  onClick={() => setActiveId(item.id)}
                  aria-label={`${isFr ? item.titleFr : item.titleEn} (${isFr ? item.dateFr : item.dateEn})`}
                  aria-pressed={isSelected}
                  style={{ left: `${leftPct}%`, top: `${topPct}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 p-3 flex items-center justify-center cursor-pointer rounded-full"
                >
                  <span
                    aria-hidden="true"
                    className={`block rounded-full border-2 bg-black transition-all duration-200 ${
                      isSelected ? 'h-5 w-5 scale-110 ring-4 ring-white/30' : 'h-3.5 w-3.5 hover:scale-125'
                    } ${
                      isPro
                        ? 'border-amber-300 shadow-[0_0_24px_rgba(251,191,36,1)]'
                        : 'border-violet-300 shadow-[0_0_24px_rgba(167,139,250,1)]'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Bottom labels (positioned directly under each trough with generous width) */}
          <div className="relative w-full h-[120px] mt-1">
            {wavePoints.map((item, idx) => {
              if (item.side !== 'bottom') return null;
              const isPro = item.type === 'pro';
              const isSelected = activeId === item.id;
              const leftPct = (item.x / VIEW_W) * 100;
              const alignClass =
                idx === 0
                  ? 'translate-x-0 text-left'
                  : idx === wavePoints.length - 1
                    ? 'translate-x-0 text-right'
                    : '-translate-x-1/2 text-center';
              const posStyle =
                idx === 0
                  ? { left: '0%' }
                  : idx === wavePoints.length - 1
                    ? { right: '0%' }
                    : { left: `${leftPct}%` };
              return (
                <button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => setActiveId(item.id)}
                  onFocus={() => setActiveId(item.id)}
                  onClick={() => setActiveId(item.id)}
                  aria-pressed={isSelected}
                  style={posStyle}
                  className={`absolute top-0 w-[260px] px-2 py-2 rounded-xl transition cursor-pointer ${alignClass} ${
                    isSelected ? 'translate-y-1' : 'hover:translate-y-1'
                  }`}
                >
                  <span className="block font-mono text-[11px] text-neutral-400 mb-1">
                    {isFr ? item.dateFr : item.dateEn}
                  </span>
                  <span className="block text-[15px] font-semibold leading-snug text-white [text-wrap:balance]">
                    {isFr ? item.titleFr : item.titleEn}
                  </span>
                  <span className="block text-xs text-neutral-300 mt-0.5">
                    {isFr ? (item.shortPlaceFr || item.placeFr) : (item.shortPlaceEn || item.placeEn)}
                  </span>
                  <span
                    className={`block text-[11px] font-medium mt-1 ${
                      isPro ? 'text-amber-300' : 'text-sky-300'
                    }`}
                  >
                    {isFr ? item.keywordsFr : item.keywordsEn}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Live hover/focus detail bar */}
          <div
            aria-live="polite"
            className="mt-10 border-t border-white/10 pt-6 max-w-4xl mx-auto min-h-[130px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
                className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6 items-start"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        isActivePro ? 'bg-amber-400' : 'bg-violet-400'
                      }`}
                      aria-hidden="true"
                    />
                    <span className="font-mono text-xs text-neutral-400">
                      {isFr ? activeItem.dateFr : activeItem.dateEn}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {isFr ? activeItem.titleFr : activeItem.titleEn}
                  </h3>
                  <p className="text-sm text-neutral-400 mt-0.5">
                    {isFr ? activeItem.placeFr : activeItem.placeEn}
                  </p>
                </div>

                <ul className="list-disc list-outside pl-5 space-y-2 text-sm text-neutral-400 leading-relaxed marker:text-sky-400/70">
                  {(isFr ? activeItem.detailsFr : activeItem.detailsEn).map((line, i) => (
                    <li key={i}>{renderHighlightedLine(line)}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile / Tablet: interactive vertical timeline cards */}
        <ol className="lg:hidden relative border-l-2 border-sky-400/35 ml-2.5 space-y-4">
          {visibleMilestones.map((item) => {
            const isPro = item.type === 'pro';
            const isSelected = activeId === item.id;
            return (
              <li key={item.id} className="relative pl-5">
                <span
                  aria-hidden="true"
                  className={`absolute -left-[9px] top-5 h-4 w-4 rounded-full border-2 bg-black transition-transform ${
                    isSelected ? 'scale-110' : ''
                  } ${
                    isPro
                      ? 'border-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.75)]'
                      : 'border-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.75)]'
                  }`}
                />
                <div
                  className={`rounded-2xl border transition ${
                    isSelected
                      ? isPro
                        ? 'border-amber-400/50 bg-neutral-950/90'
                        : 'border-violet-400/50 bg-neutral-950/90'
                      : 'border-white/10 bg-neutral-950/75'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    aria-expanded={isSelected}
                    className="flex items-start justify-between gap-3 text-left w-full p-4 cursor-pointer active:opacity-80"
                  >
                    <div className="min-w-0">
                      <span className="block font-mono text-[11px] text-neutral-400">
                        {isFr ? item.dateFr : item.dateEn}
                      </span>
                      <h3 className="text-[15px] font-semibold text-white mt-0.5 leading-snug">
                        {isFr ? item.titleFr : item.titleEn}
                      </h3>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        {isFr ? item.placeFr : item.placeEn}
                      </p>
                      <p
                        className={`text-xs font-medium mt-1.5 ${
                          isPro ? 'text-amber-300' : 'text-sky-300'
                        }`}
                      >
                        {isFr ? item.keywordsFr : item.keywordsEn}
                      </p>
                    </div>
                    <svg
                      className={`shrink-0 mt-1 text-neutral-400 transition-transform duration-200 ${
                        isSelected ? 'rotate-180 text-sky-400' : ''
                      }`}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {isSelected && (
                    <ul className="px-4 pb-4 pt-1 border-t border-white/10 list-disc list-outside ml-4 space-y-2 text-[13px] text-neutral-300 leading-relaxed marker:text-sky-400/80">
                      {(isFr ? item.detailsFr : item.detailsEn).map((line, i) => (
                        <li key={i}>{renderHighlightedLine(line)}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
});
