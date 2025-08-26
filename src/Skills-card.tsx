import { HoverEffect } from "./Card-hover-effect.tsx";
import React from "react";
import { useTranslation } from 'react-i18next';

export function CardHoverEffect() {
  const { t } = useTranslation();
  
  // Définir les projets directement dans le composant
  const projects = [
    {
      title: "React",
      description: t('skills_card.react.description'),
      link: "https://react.dev"
    },
    {
      title: "Tailwind CSS",
      description: t('skills_card.tailwind.description'),
      link: "https://tailwindcss.com"
    },
    {
      title: t('skills_card.Proactif.title'),
      description: t('skills_card.Proactif.description'),
      link: "https://vuejs.org"
    },
    {
      title: "Symfony",
      description: t('skills_card.symfony.description'),
      link: "https://symfony.com/doc/current/index.html"
    },
    {
      title: "PostgreSQL",
      description: t('skills_card.postgresql.description'),
      link: "https://www.postgresql.org"
    },
    {
      title: "Autodidacte",
      description: t('skills_card.Autodidacte.description'),
      link: "https://nodejs.org/en"
    },
    {
      title: "Nuxt",
      description: t('skills_card.nuxt.description'),
      link: "https://nuxt.com"
    },
    {
      title: "Docker",
      description: t('skills_card.docker.description'),
      link: "https://www.docker.com/"
    },
    {
      title: t('skills_card.teamwork.title'),
      description: t('skills_card.teamwork.description'),
      link: "https://www.docker.com/"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
