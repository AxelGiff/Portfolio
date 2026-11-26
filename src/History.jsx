import React, { memo, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import prefectureIcon from './images/prefecture.webp';
import bookmarkIcon from './images/icons8-add-bookmark-64.webp';
import paperPlaneIcon from './images/icons8-paper-plane-50.webp';
import levelUpIcon from './images/Capsule-244-×-244-px-244-×-100-px-3.webp';
import diplomaIcon from './images/icons8-chapeau-de-diplôme-30.webp';
import schoolIcon from './images/icons8-école-50.webp';

const HighlightedText = memo(function HighlightedText({ children }) {
  return (
    <span className="text-white font-semibold underline decoration-sky-400/80 decoration-2 underline-offset-[3px]">
      {children}
    </span>
  );
});

const SkillItem = memo(({ skill, summary, modules }) => (
  <div>
    <div className="text-sm font-semibold text-white">{skill}</div>
    <div className="text-xs text-neutral-400 mt-0.5 leading-snug">{summary}</div>
    <div className="text-xs text-sky-300 font-medium mt-1 leading-relaxed">
      {modules.join(' · ')}
    </div>
  </div>
));

const TimelineStep = memo(function TimelineStep({
  isAcademic,
  title,
  period,
  icon,
  isWideLogo = false,
  children,
}) {
  const { t } = useTranslation();
  const badgeText = isAcademic ? t('Academic Experience') : t('Professional Experience');

  return (
    <article className="relative pl-9 sm:pl-12 pb-10 mb-10 border-b border-white/[0.07] last:border-b-0 last:pb-0 last:mb-0">
      {/* Node on the scroll beam */}
      <span
        aria-hidden="true"
        className={`absolute left-3 sm:left-4 top-2 -translate-x-1/2 h-3 w-3 rounded-full border-2 bg-neutral-950 ${
          isAcademic
            ? 'border-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.6)]'
            : 'border-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]'
        }`}
      />

      {/* Header: Title + Logo on left, Period on right (CV-style scannability) */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-1.5">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-lg sm:text-xl font-semibold text-white tracking-tight">
            {title}
          </span>
          {icon && (
            <img
              src={icon}
              alt=""
              loading="lazy"
              decoding="async"
              className={
                isWideLogo
                  ? 'h-6 sm:h-7 w-auto object-contain'
                  : 'h-5 w-5 object-contain'
              }
            />
          )}
        </div>
        <span className="text-xs font-mono text-neutral-400 shrink-0">{period}</span>
      </div>

      {/* Subtle category tag under title */}
      <div className="mb-4">
        <span
          className={`inline-block text-[11px] font-medium px-2 py-0.5 rounded ${
            isAcademic
              ? 'bg-violet-500/15 text-violet-200'
              : 'bg-amber-500/15 text-amber-200'
          }`}
        >
          {badgeText}
        </span>
      </div>

      {/* Body with comfortable measure */}
      <div className="text-sm sm:text-[15px] text-neutral-400 leading-relaxed max-w-[65ch]">
        {children}
      </div>
    </article>
  );
});

export default function History() {
  const { t } = useTranslation();

  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 75%'],
  });
  const beamScaleY = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative">
      <div className="gradient-02 z-[-1] right-1/4 top-[1240px] w-1/2 h-full opacity-30 pointer-events-none" />

      <div
        id="parcours"
        style={{
          maskImage:
            'linear-gradient(to bottom, white 0%, white 92%, rgba(255,255,255,0.6) 97%, transparent 100%)',
        }}
        className="backdrop-blur-xl px-6 sm:px-10 py-10 border border-gray-800 rounded-2xl min-h-[800px]"
      >
        <div className="flex flex-col items-center mb-10">
          <img
            src={paperPlaneIcon}
            alt=""
            width="30"
            height="30"
            className="mb-1"
          />
          <h3 className="!pb-0">Road Trip</h3>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Background track */}
          <div
            aria-hidden="true"
            className="absolute left-3 sm:left-4 top-2 bottom-2 w-[2px] -translate-x-1/2 bg-white/10"
          />
          {/* Scroll-driven glowing beam */}
          <motion.div
            aria-hidden="true"
            style={{ scaleY: beamScaleY }}
            className="absolute left-3 sm:left-4 top-2 bottom-2 w-[2px] -translate-x-1/2 origin-top bg-gradient-to-b from-sky-400 via-blue-500 to-violet-500"
          />

          <TimelineStep
            isAcademic={false}
            title={t('prefecture_2025_title')}
            period={t('prefecture_2025_period')}
            icon={prefectureIcon}
            isWideLogo={true}
          >
            <ul className="list-disc list-outside pl-5 space-y-2 marker:text-amber-400/70">
              <li>
                {t('pref25_sec_prefix')} <HighlightedText>{t('pref25_sec_hl1')}</HighlightedText>
                {t('pref25_sec_mid')} <HighlightedText>{t('pref25_sec_hl2')}</HighlightedText>{' '}
                {t('pref25_sec_suffix')}
              </li>
              <li>
                {t('pref25_agile_prefix')} <HighlightedText>{t('pref25_agile_hl1')}</HighlightedText>{' '}
                {t('pref25_agile_suffix')}
              </li>
              <li>
                {t('pref25_ssi_prefix')} <HighlightedText>{t('pref25_ssi_hl1')}</HighlightedText>{' '}
                {t('pref25_ssi_suffix')}
              </li>
              <li>
                {t('pref25_legacy_prefix')} <HighlightedText>{t('pref25_legacy_hl1')}</HighlightedText>{' '}
                {t('pref25_legacy_suffix')}
              </li>
              <li>
                {t('pref25_fullstack_prefix')} <HighlightedText>{t('pref25_fullstack_hl1')}</HighlightedText>{' '}
                {t('pref25_fullstack_suffix')}
              </li>
            </ul>
          </TimelineStep>

          <TimelineStep
            isAcademic={true}
            title={t('master_upec_title')}
            period={t('master_upec_period')}
            icon={diplomaIcon}
          >
            <div className="mb-4 text-neutral-300">
              {t('master_upec_intro')}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              <SkillItem
                skill={t('master_lowlevel')}
                summary={t('master_lowlevel_summary')}
                modules={[t('master_lowlevel_modules')]}
              />
              <SkillItem
                skill={t('master_distributed')}
                summary={t('master_distributed_summary')}
                modules={[t('master_distributed_modules')]}
              />
              <SkillItem
                skill={t('master_verification')}
                summary={t('master_verification_summary')}
                modules={[t('master_verification_modules')]}
              />
              <SkillItem
                skill={t('master_paradigms')}
                summary={t('master_paradigms_summary')}
                modules={[t('master_paradigms_modules')]}
              />
            </div>
          </TimelineStep>

          <TimelineStep
            isAcademic={true}
            title={t('but3')}
            period={t('datebut3')}
            icon={bookmarkIcon}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              <SkillItem
                skill={t('Réaliser')}
                summary={t('RealiserSummary')}
                modules={[t('Web Development'), t('Mobile Development'), t('Software Architecture')]}
              />
              <SkillItem
                skill={t('Optimiser')}
                summary={t('OptimiserSummary')}
                modules={[t('Algorithms / Data Structures'), t('Machine Learning / Deep Learning')]}
              />
              <SkillItem
                skill={t('Administrer')}
                summary={t('AdministrerSummary')}
                modules={[t('Databases'), t('Networking / Containerization')]}
              />
              <SkillItem
                skill={t('Gérer')}
                summary={t('GérerSummary')}
                modules={[t('Project Management / Communication')]}
              />
              <SkillItem
                skill={t('Conduire')}
                summary={t('ConduireSummary')}
                modules={[t('Automation'), t('Probabilities')]}
              />
              <SkillItem
                skill={t('SAE')}
                summary={t('SAESummary')}
                modules={[t('devweb'), t('ia'), t('virtua')]}
              />
            </div>
          </TimelineStep>

          <TimelineStep
            isAcademic={false}
            title={t('prefecture_title')}
            period={t('prefecture_period')}
            icon={prefectureIcon}
            isWideLogo={true}
          >
            <ul className="list-disc list-outside pl-5 space-y-2 marker:text-amber-400/70">
              <li>
                {t('software_engineering')} : <HighlightedText>{t('requirements_analysis')}</HighlightedText>,{' '}
                <HighlightedText>{t('conception')}</HighlightedText> {t('and')}{' '}
                <HighlightedText>{t('tests')}</HighlightedText>
              </li>
              <li>
                {t('migration_php')} <HighlightedText>{t('symfony')}</HighlightedText> {t('and')}{' '}
                <HighlightedText>{t('nuxt_typescript')}</HighlightedText>
              </li>
              <li>
                {t('development_of')} <HighlightedText>{t('statistical_production')}</HighlightedText>
              </li>
              <li>
                {t('rest_api')} <HighlightedText>{t('api_platform')}</HighlightedText>, {t('communicating_with')}{' '}
                <HighlightedText>{t('nuxt')}</HighlightedText>
              </li>
            </ul>
          </TimelineStep>

          <TimelineStep
            isAcademic={false}
            title={t('levelup_title')}
            period={t('levelup_period')}
            icon={levelUpIcon}
            isWideLogo={true}
          >
            <div>
              {t('during_internship')} <HighlightedText>{t('skills')}</HighlightedText> {t('in')}{' '}
              <HighlightedText>{t('project_management')}</HighlightedText> &{' '}
              <HighlightedText>{t('team_management')}</HighlightedText>, {t('using_tools')}{' '}
              <HighlightedText>{t('web_developer')}</HighlightedText>
            </div>
          </TimelineStep>

          <TimelineStep
            isAcademic={true}
            title={t('university_title')}
            period={t('university_period')}
            icon={diplomaIcon}
          >
            <div>
              {t('first_year')} <HighlightedText>{t('computer_science')}</HighlightedText> {t('at_sorbonne')}
            </div>
          </TimelineStep>

          <TimelineStep
            isAcademic={true}
            title={t('highschool_title')}
            period={t('highschool_period')}
            icon={schoolIcon}
          >
            <div>
              {t('during_highschool')} <HighlightedText>{t('computer_science')}</HighlightedText>{' '}
              {t('extensively_engaging')} <HighlightedText>{t('building_pc')}</HighlightedText>, {t('creating')}{' '}
              <HighlightedText>{t('media_edits')}</HighlightedText>, {t('troubleshooting_however')}{' '}
              <span className="text-amber-300 font-semibold underline decoration-amber-400/80 decoration-2 underline-offset-[3px]">
                {t('coding')}
              </span>.
            </div>
          </TimelineStep>
        </div>
      </div>
    </div>
  );
}
