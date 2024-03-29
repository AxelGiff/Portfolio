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
    title: "React",
    description:
      "I started studying React on my own to be able to make it my main language",
    link: "https://fr.legacy.reactjs.org",
  },
  {
    title: "Tailwind CSS",
    description:
      "Since 2022, I started using tailwind which has helped me enormously in simplifying the css",
    link: "https://tailwindcss.com",
  },
  {
    title: "Vue.js",
    description:
      "A framework that I have studied and can master",
    link: "https://vuejs.org",
  },
  {
    title: "PHP",
    description:
      "This is the backend language that I master the most (for now). I would therefore like to be able to switch to Laravel or Symfony",
    link: "https://www.php.net/manual/fr/intro-whatis.php",
  },
  {
    title: "PostgreSQL",
    description:
      "I love carrying out my projects using postgreSQL which brings a certain complexity to the project",
    link: "https://www.postgresql.org",
  },
  {
    title: "Node.js",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://nodejs.org/en",
  },
  {
    title: "Figma - Photoshop",
    description:
      "Since I was a teenager, I have always been attracted to digital design.Since I was a teenager, I have always been attracted to digital design.",
    link: "https://microsoft.com",
  },{
    title: "Notion",
    description:
      "A superb project management tool that I master perfectly to monitor my personal or professional life by creating no-code databases",
    link: "https://microsoft.com",
  },
  {
    title: "WordPress",
    description:
      `I was able to use the Divi plugin to redesign a website and the Yoast plugin to optimize its SEO.I would like to discover other low-code platforms like webflow to create websites`,
    link: "https://microsoft.com",
  },
];
