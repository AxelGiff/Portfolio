"use client";
import { TextGenerateEffect } from "./text-generate-effect.tsx";

const words = `From Paris to <strong>VsCode</strong>, I'm a professional <strong>web developer</strong> who likes coding any website, webapps with my personal <strong>UI/UX</strong> design touch. I have been studying <strong>front/back end</strong> since <strong>2021</strong>. I've always been someone who has a taste for the <strong>creation</strong> and the <strong>logical side</strong>. That's why I've decided to become a <strong>front-end developer</strong> to use my power of my brain-skills.</p>`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
