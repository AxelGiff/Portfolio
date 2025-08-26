import React from 'react';
import Technologies from '../Technologies.jsx';
import LandingMedicial from './LandingMedicial.jsx';
import AboutMedicial from './AboutMedicial.jsx';
import { MovingLine } from './Content.jsx'; // Ajout de l'import
import { useTranslation } from 'react-i18next';

/**
 * @function Cnn
 * @description Composant React pour la page CNN
 * @returns {ReactElement} Un composant React affichant la page CNN
 */
export default function Medicial() {
        const { t } = useTranslation();

    return (
    <div className="flex flex-col items-center justify-center ">
      <LandingMedicial />
      <img
        src={new URL("./images/main2chatbot.png", import.meta.url).href}
        alt="screen todo list"
        loading="lazy"
        className="-mt-96 -z-[-10] w-[100%] h-[100%] sm:w-[60%] sm:h-[650px] shadow-lg sm:visible [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000 rounded-xl"
      />
      <Technologies iconsToShow={["React", "Tensorflow", "FastAPI", "HuggingFace", "MongoDB","Docker"]} />
      <AboutMedicial />
  <a
  href="https://www.linkedin.com/posts/axel-giffard_developpement-nicetohave-developpementweb-activity-7325573551548153856-Fp4i?utm_source=share&utm_medium=member_desktop&rcm=ACoAADePVGUB4Z_phgku6Y88Jy1cwmvoQJZJtbM"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:bg-blue-600 transition-all duration-200"
>
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/>
  </svg>
  {t("linkedinChatbot")}
</a>
    </div>
  );
}
