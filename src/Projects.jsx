import React, { memo } from 'react';
import BadgeTextGradient from './BadgeGradient.tsx';
import ProjectCard from './Project-card.tsx';
import { Carousel } from './Carousel.tsx';

// Direct image imports 
import qualotoImage from './images/Qualoto.png';
import cnnPortfolioImage from './images/cnnPortfolio.png';
import screenDashAdminImage from './images/screen_dash_admin_pres.png';
import netcardsImage from './images/netcards.png';
import todolistImage from './images/todolist.png';

// Define slide data outside component to prevent recreation on each render
const slideData = [
  {
    id: "1",
    title: "Qualoto",
    button: "More details",
    src: qualotoImage,
    iconsToShow: ["HTML", "Tailwind", "Django", "MySQL"],
  },
  {
    id: "2",
    title: "Classification de genre et d'âge (CNN)",
    button: "More details",
    src: cnnPortfolioImage,
    iconsToShow: ["Gradio", "TensorFlow", "Keras", "HuggingFace", "ScikitLearn"],
  },
  {
    id: "3",
    title: "Perform Vision",
    button: "More details",
    src: screenDashAdminImage,
    iconsToShow: ["HTML", "Tailwind", "PHP", "PostgreSQL", "JS"],
  },
  {
    id: "4",
    title: "NetCards",
    button: "More details",
    src: netcardsImage,
    iconsToShow: ["HTML", "Tailwind", "JS", "PHP", "MySQL"],
  },
  {
    id: "5",
    title: "Todo List",
    button: "More details",
    src: todolistImage,
    iconsToShow: ["React", "JS", "CSS"],
  },
];

const Projects = memo(() => {
  return (
    <section id="project-container" className="relative mt-48">
      <BadgeTextGradient text="Projects" />
      <h1 className='about-title text-white text-5xl block text-center block mb-32'>My work</h1>
      <div className="relative overflow-hidden w-full h-full py-20">
        <Carousel slides={slideData} />
        <div className="gradient-02 absolute z-[-1] right-1/2 bottom-48 w-1/4 h-[60%] opacity-50"></div>
        <div className="gradient-02 absolute z-[-1] right-1/4 bottom-48 w-1/4 h-[60%] opacity-50"></div>
      </div>
    </section>
  );
});

export default Projects;
