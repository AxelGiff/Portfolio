import React from 'react'
import BadgeTextGradient from '../BadgeGradient.tsx';

export default function Technologies({iconsToShow,bgcolor}) {

    
  const icons=[
    {
      key : 1,
      name : "React",
    
    },
   {
      key: 12,
      name: "Django",
    },
    {
      key: 3,
      name: "HTML",
    },
    {
        key: 8,
        name: "Tailwind",
    },
    {
      key: 2,
      name: "CSS",
    },
    {
      key: 4,
      name: "Javascript",
    },
    {
      key: 5,
      name:"WordPress",
    }
    ,{
      key: 6,
      name: "MySQL",
    }
    ,{
      key: 7,
      name: "PostgreSQL",
    }
    ,
    {
        key: 10,
        name: "PHP",
    },
    {
      key: 9,
      name: "Figma",
    }
    ,
    {
      key: 11,
      name: "Notion",
    },
    {
      key: 13,
      name: "Tensorflow",
    },
    {
      key: 14,
      name: "Keras",
    },
    {
      key: 15,
      name: "Gradio",
    },
    {
      key: 16,
      name: "HuggingFace",
    },
    {
      key: 17,
      name: "Scikit-Learn",
    },
    {
      key: 18,
      name:"FastAPI",
    },
    {
      key: 19,
      name:"MongoDB",
    },
    {
      key: 20,
      name:"Docker",
    }
  ]

  const filteredIcons = icons.filter(icon => iconsToShow.includes(icon.name));

  const iconList = filteredIcons.map((icon) => (
    <li key={icon.key} className="px-1.5 py-1 rounded-md text-sm capitalize font-bold">
      <BadgeTextGradient text={icon.name} />
    </li>
  ));

  return (
    <div className="flex flex-col items-center px-4 mt-8">
      <h2 className="text-white text-center text-[1.1rem]">Technologies</h2>
      <ul className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-2 mt-4">
        {iconList}
      </ul>
    </div>
  );
}
  

