import React, { memo } from 'react';
import BadgeTextGradient from './BadgeGradient.tsx';
import ProjectCard from './Project-card.tsx';
import { Carousel } from './Carousel.tsx';
import { useTranslation } from 'react-i18next';

import qualotoImage from './images/Qualoto.png';
import cnnPortfolioImage from './images/cnnPortfolio.png';
import screenDashAdminImage from './images/screen_dash_admin_pres.png';
import netcardsImage from './images/netcards.png';
import todolistImage from './images/todolist.PNG';

const baseSlideData = [
  {
    id: "1",
    title: "Qualoto",
    src: qualotoImage,
    iconsToShow: ["HTML", "Tailwind", "Django", "MySQL"],
  },
  {
    id: "2",
    title: "Classification de genre et d'âge (CNN)",
    src: cnnPortfolioImage,
    iconsToShow: ["Gradio", "TensorFlow", "Keras", "HuggingFace", "ScikitLearn"],
  },
  {
    id: "3",
    title: "Perform Vision",
    src: screenDashAdminImage,
    iconsToShow: ["HTML", "Tailwind", "PHP", "PostgreSQL", "JS"],
  },
  {
    id: "4",
    title: "NetCards",
    src: netcardsImage,
    iconsToShow: ["HTML", "Tailwind", "JS", "PHP", "MySQL"],
  },
  {
    id: "5",
    title: "Todo List",
    src: todolistImage,
    iconsToShow: ["React", "JS", "CSS"],
  },
];

const Projects = memo(() => {
  const { t } = useTranslation();
  
  // Appliquer les traductions ici
  const slideData = baseSlideData.map(slide => ({
    ...slide,
    button: t("More details")
  }));
  
  return (
    <section id="project-container" className="relative mt-48">
      <BadgeTextGradient text={t("Projects")} /> 
      <h1 className='about-title text-white text-5xl block text-center block mb-32'>{t('My work')}</h1> 
      <div className="relative overflow-hidden w-full h-full py-20">
        <Carousel slides={slideData} />
        <div className="gradient-02 absolute z-[-1] right-1/2 bottom-48 w-1/4 h-[60%] opacity-50"></div>
        <div className="gradient-02 absolute z-[-1] right-1/4 bottom-48 w-1/4 h-[60%] opacity-50"></div>
      </div>
    </section>
  );
});

export default Projects;
