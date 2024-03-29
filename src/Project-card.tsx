import React from 'react';
import IconBxlReact from "./lib/icons/react.jsx";
import IconBxlMySQL from "./lib/icons/mySQL.jsx";
import IconBxlJavascript from "./lib/icons/js.jsx";
import IconLanguagePhp from "./lib/icons/php.jsx";
import IconBxlCss3 from "./lib/icons/css.jsx";
import IconHtml5 from "./lib/icons/html.jsx";
import IconWordpress from "./lib/icons/wordPress.jsx";
import IconBxlPostgresql from "./lib/icons/postgreSQL.jsx";
import IconBxlTailwindCss from "./lib/icons/tailwind.jsx";
import IconFigma from "./lib/icons/figma.jsx";
import IconNotion from "./lib/icons/notion.jsx";

export default function ProjectCard({ link, img, alt, title, desc,iconsToShow }) {

  const icons=[
    {
      key : 1,
      name : "React",
      image: <IconBxlReact/>
    
    },
   
    {
      key: 3,
      name: "HTML",
      image: <IconHtml5 />
    },
    {
      key: 2,
      name: "CSS",
      image: <IconBxlCss3 />
    },
    {
      key: 4,
      name: "JS",
      image: <IconBxlJavascript />
    },
    {
      key: 5,
      name:"WordPress",
      image: <IconWordpress />
    }
    ,{
      key: 6,
      name: "MySQL",
      image: <IconBxlMySQL />
    }
    ,{
      key: 7,
      name: "PostgreSQL",
      image: <IconBxlPostgresql />
    }
    ,{
      key: 8,
      name: "Tailwind",
      image: <IconBxlTailwindCss />
    }
    ,{
      key: 9,
      name: "Figma",
      image: <IconFigma />
    }
    ,{
      key: 10,
      name: "PHP",
      image: <IconLanguagePhp />
    },
    {
      key: 11,
      name: "Notion",
      image: <IconNotion />
    }
  ]
  console.log("iconsToShow:", iconsToShow); // Vérifier le contenu de iconsToShow dans la console

  const filteredIcons = icons.filter(icon => iconsToShow.includes(icon.name));

  const iconList = filteredIcons.map((icon, index) => (
    <li key={index}>{icon.image}</li>
  ));
  return (
    <div className="grid-item">
      <a href={link}><img src={img} alt={alt} /></a>
      <div className="project-info">
        <h2 className="project-title font-semibold  bg-clip-text text-transparent">{title}</h2>
        <p className="project-desc">{desc}</p>
        <ul className="flex flex-row items-center justify-center gap-3 mt-4">
          {iconList}
        </ul>
      </div>
    </div>
  );
}
/* 008DDA bg-gradient-to-b from-[#ffff] to-[#05668D] */