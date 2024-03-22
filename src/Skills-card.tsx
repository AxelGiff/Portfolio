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
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://fr.legacy.reactjs.org",
  },
  {
    title: "Tailwind CSS",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://tailwindcss.com",
  },
  {
    title: "Vue.js",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://vuejs.org",
  },
  {
    title: "PHP",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://www.php.net/manual/fr/intro-whatis.php",
  },
  {
    title: "PostgreSQL",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
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
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },{
    title: "Notion",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
  {
    title: "WordPress",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
