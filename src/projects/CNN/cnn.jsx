import React from 'react';
import Technologies from '../Technologies.jsx';
import LandingCnn from './LandingCnn.jsx';
import AboutCnn from './AboutCnn.jsx';
import { MovingLine } from './Content.jsx'; // Ajout de l'import

export default function Cnn() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <LandingCnn />
      <img
        src={new URL("./images/linus.webp", import.meta.url).href}
        alt="screen todo list"
        loading="lazy"
        className="-mt-16 sm:-mt-36 lg:-mt-64 -z-[-10] w-[92%] max-w-4xl h-auto object-cover shadow-lg sm:visible [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000 rounded-xl"
      />
      <Technologies iconsToShow={["Scikit-Learn", "Tensorflow", "Keras", "HuggingFace", "Gradio"]} />
      <AboutCnn />
      <MovingLine />
    </div>
  );
}
