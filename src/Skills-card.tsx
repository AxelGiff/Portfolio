import { HoverEffect } from "./Card-hover-effect.tsx";
import React from "react";

export function CardHoverEffect() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    id: "1",
    title: "React",
    description:
      "I started studying React on my own to be able to make it my main language",
    link: "https://fr.legacy.reactjs.org",
  },
  {
    id: "2",

    title: "Tailwind CSS",
    description:
      "Since 2022, I started using tailwind which has helped me enormously in simplifying the css",
    link: "https://tailwindcss.com",
  },
  {
    id: "3",

    title: "Vue.js",
    description:
      "A framework that I have studied and can master",
    link: "https://vuejs.org",
  },
  {
    id: "4",

    title: "PHP",
    description:
      "This is the backend language that I master the most (for now). I would therefore like to be able to switch to Laravel or Symfony",
    link: "https://www.php.net/manual/fr/intro-whatis.php",
  },
  {
    id: "5",

    title: "PostgreSQL",
    description:
      "I love carrying out my projects using postgreSQL which brings a certain complexity to the project",
    link: "https://www.postgresql.org",
  },
  {
    id: "6",

    title: "Node.js",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://nodejs.org/en",
  },
  {
    id: "7",

    title: "Nuxt",
    description:
      "Since I was a teenager, I have always been attracted to digital design.Since I was a teenager, I have always been attracted to digital design.",
      link: "https://www.figma.com", // Lien pertinent
    },{
    id: "8",

    title: "Symfony",
    description:
      "A superb project management tool that I master perfectly to monitor my personal or professional life by creating no-code databases",
      link: "https://www.notion.so", // Lien pertinent
    },
  {
    id: "9",

    title: "Docker",
    description:
      `I was able to containerize my applications and deploy them with Docker `,
      link: "https://wordpress.org", // Lien pertinent
    },
];
