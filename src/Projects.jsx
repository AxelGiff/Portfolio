import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import BadgeTextGradient from './BadgeGradient.tsx';
import { prefetchProject } from './utils/assetPreloader.js';

import IconDjango from './lib/icons/django.jsx';
import IconBxlReact from './lib/icons/react.jsx';
import IconBxlCss3 from './lib/icons/css.jsx';
import IconHtml5 from './lib/icons/html.jsx';
import IconBxlJavascript from './lib/icons/js.jsx';
import IconBxlTailwindCss from './lib/icons/tailwind.jsx';
import IconBxlMySQL from './lib/icons/mySQL.jsx';
import IconBxlPostgresql from './lib/icons/postgreSQL.jsx';
import IconLanguagePhp from './lib/icons/php.jsx';
import IconKeras from './lib/icons/keras.jsx';
import IconTensorFlow from './lib/icons/tensorFlow.jsx';
import IconHuggingFace from './lib/icons/huggingFace.jsx';
import IconScikitLearn from './lib/icons/scikitLearn.jsx';
import IconGradio from './lib/icons/gradio.jsx';
import IconMongoDB from './lib/icons/mongoDB.jsx';
import IconFastAPI from './lib/icons/fastApi.jsx';
import IconBxlDocker from './lib/icons/docker.jsx';

import qualotoImage from './images/Qualoto.webp';
import cnnPortfolioImage from './images/cnnPortfolio.webp';
import screenDashAdminImage from './images/screen_dash_admin_pres.png';
import netcardsImage from './images/netcards.webp';
import todolistImage from './images/todolist.webp';
import chatbotImage from './images/mainChatbot.webp';

const techIcons = {
  HTML: { label: 'HTML5', icon: <IconHtml5 /> },
  Tailwind: { label: 'Tailwind CSS', icon: <IconBxlTailwindCss /> },
  Django: { label: 'Django', icon: <IconDjango /> },
  MySQL: { label: 'MySQL', icon: <IconBxlMySQL /> },
  Gradio: { label: 'Gradio', icon: <IconGradio /> },
  TensorFlow: { label: 'TensorFlow', icon: <IconTensorFlow /> },
  Keras: { label: 'Keras', icon: <IconKeras /> },
  HuggingFace: { label: 'Hugging Face', icon: <IconHuggingFace /> },
  ScikitLearn: { label: 'Scikit-Learn', icon: <IconScikitLearn /> },
  PHP: { label: 'PHP', icon: <IconLanguagePhp /> },
  PostgreSQL: { label: 'PostgreSQL', icon: <IconBxlPostgresql /> },
  JS: { label: 'JavaScript', icon: <IconBxlJavascript /> },
  React: { label: 'React', icon: <IconBxlReact /> },
  CSS: { label: 'CSS3', icon: <IconBxlCss3 /> },
  MongoDB: { label: 'MongoDB', icon: <IconMongoDB /> },
  FastAPI: { label: 'FastAPI', icon: <IconFastAPI /> },
  Docker: { label: 'Docker', icon: <IconBxlDocker /> },
};

const projectsData = [
  {
    id: '6',
    index: '01',
    featured: true,
    category: 'ai',
    title: 'Medic.ial',
    summaryFr: 'Assistant médical conversationnel propulsé par IA, FastAPI et Docker.',
    summaryEn: 'AI-powered medical conversational assistant built with FastAPI and Docker.',
    src: chatbotImage,
    iconsToShow: ['React', 'MongoDB', 'TensorFlow', 'FastAPI', 'Docker', 'HuggingFace'],
  },
  {
    id: '1',
    index: '02',
    category: 'web',
    title: 'Qualoto',
    summaryFr: 'Plateforme de loto en ligne avec gestion de grilles, tirages en direct et classement.',
    summaryEn: 'Online lottery platform with grid management, live draws, and rankings.',
    src: qualotoImage,
    iconsToShow: ['HTML', 'Tailwind', 'Django', 'MySQL'],
  },
  {
    id: '2',
    index: '03',
    category: 'ai',
    title: 'Classification CNN',
    summaryFr: 'Réseau de neurones convolutif pour prédire l’âge et le genre à partir de visages.',
    summaryEn: 'Convolutional neural network predicting age and gender from facial images.',
    src: cnnPortfolioImage,
    iconsToShow: ['Gradio', 'TensorFlow', 'Keras', 'HuggingFace', 'ScikitLearn'],
  },
  {
    id: '3',
    index: '04',
    category: 'web',
    title: 'Perform Vision',
    summaryFr: 'Tableau de bord de gestion d’adhérents, créneaux et suivi administratif.',
    summaryEn: 'Management dashboard for members, time slots, and administration.',
    src: screenDashAdminImage,
    iconsToShow: ['HTML', 'Tailwind', 'PHP', 'PostgreSQL', 'JS'],
  },
  {
    id: '4',
    index: '05',
    category: 'web',
    title: 'NetCards',
    summaryFr: 'Application web de révision par flashcards et partage de paquets de cartes.',
    summaryEn: 'Flashcard learning web app with deck creation and sharing.',
    src: netcardsImage,
    iconsToShow: ['HTML', 'Tailwind', 'JS', 'PHP', 'MySQL'],
  },
  {
    id: '5',
    index: '06',
    category: 'web',
    title: 'Todo List',
    summaryFr: 'Gestionnaire de tâches réactif en React avec édition et filtrage instantané.',
    summaryEn: 'Reactive React task manager with inline editing and instant filtering.',
    src: todolistImage,
    iconsToShow: ['React', 'JS', 'CSS'],
  },
];

const Projects = memo(() => {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState('all');
  const isFr = i18n.language?.startsWith('fr');

  const filters = [
    { id: 'all', label: isFr ? 'Tous' : 'All', count: projectsData.length },
    { id: 'web', label: 'Full-Stack & Web', count: projectsData.filter((p) => p.category === 'web').length },
    { id: 'ai', label: isFr ? 'IA & Machine Learning' : 'AI & Machine Learning', count: projectsData.filter((p) => p.category === 'ai').length },
  ];

  const visibleProjects =
    filter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="project-container" className="relative mt-48 px-4 sm:px-8">
      <BadgeTextGradient text={t('Projects')} />
      <h1 className="about-title text-white text-4xl sm:text-5xl block text-center mb-6">
        {t('My work')}
      </h1>
      <p className="text-center text-neutral-400 text-sm sm:text-base max-w-xl mx-auto mb-12">
        {isFr
          ? 'Sélectionnez un projet pour explorer son architecture, ses choix techniques et ses écrans.'
          : 'Select any project to explore its architecture, technical stack, and previews.'}
      </p>

      {/* Filter bar */}
      <div
        role="tablist"
        aria-label={isFr ? 'Filtrer les projets par catégorie' : 'Filter projects by category'}
        className="flex flex-wrap items-center justify-center gap-2 mb-12"
      >
        {filters.map((item) => {
          const isActive = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setFilter(item.id)}
              className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition cursor-pointer ${
                isActive
                  ? 'text-white'
                  : 'text-neutral-400 hover:text-white border border-white/10 bg-white/[0.02]'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="project-filter-pill"
                  transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                  className="absolute inset-0 rounded-full bg-white/15 border border-white/25 backdrop-blur-md"
                />
              )}
              <span className="relative z-10">{item.label}</span>
              <span className="relative z-10 rounded-full bg-white/10 px-1.5 py-0.5 text-[11px] text-neutral-300">
                {item.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Background glows */}
      <div className="gradient-02 absolute z-[-1] right-1/2 bottom-48 w-1/4 h-[50%] opacity-40 pointer-events-none" />
      <div className="gradient-02 absolute z-[-1] right-1/4 bottom-24 w-1/4 h-[50%] opacity-40 pointer-events-none" />

      {/* Direct-access Bento grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            onMouseEnter={() => prefetchProject(project.id)}
            onFocus={() => prefetchProject(project.id)}
            className={`group relative flex flex-col rounded-3xl border bg-neutral-950/75 overflow-hidden backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 hover:border-sky-400/50 hover:-translate-y-1 ${
              project.featured ? 'border-sky-400/35' : 'border-white/10'
            }`}
          >
            {/* Preview image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
              <img
                src={project.src}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"
              />
              <span className="absolute top-3 left-3 rounded-full border border-white/15 bg-black/60 px-2.5 py-1 text-[11px] font-mono text-neutral-300 backdrop-blur-md">
                {project.index}
              </span>
              <span className="absolute top-3 right-3 rounded-full border border-white/15 bg-black/60 px-2.5 py-1 text-[10px] uppercase tracking-wider text-neutral-300 backdrop-blur-md">
                {project.category === 'ai' ? 'AI / ML' : 'Web'}
              </span>
            </div>

            {/* Card body */}
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <h2 className="text-xl font-semibold text-white tracking-tight group-hover:text-sky-300 transition">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm text-neutral-400 leading-relaxed line-clamp-2">
                  {isFr ? project.summaryFr : project.summaryEn}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-2 min-w-0">
                <ul className="flex flex-wrap items-center gap-1.5 min-w-0" aria-label="Technologies">
                  {project.iconsToShow.map((key) => {
                    const tech = techIcons[key];
                    if (!tech) return null;
                    return (
                      <li
                        key={key}
                        title={tech.label}
                        className="w-5 h-5 flex items-center justify-center opacity-80 group-hover:opacity-100 transition [&>svg]:w-5 [&>svg]:h-5"
                      >
                        {tech.icon}
                      </li>
                    );
                  })}
                </ul>

                <span className="inline-flex items-center gap-1 text-xs font-medium text-neutral-300 group-hover:text-sky-400 transition shrink-0">
                  <span>{t('More details')}</span>
                  <svg
                    className="transition-transform group-hover:translate-x-0.5"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
});

export default Projects;
