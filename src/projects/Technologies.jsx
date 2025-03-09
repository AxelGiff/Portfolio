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
      key: 16,
      name: "Scikit-Learn",
    }
  ]

  const filteredIcons = icons.filter(icon => iconsToShow.includes(icon.name));

  const iconList = filteredIcons.map((icon, index) => (
    <li key={index} className='px-3 py-2 rounded-md text-sm capitalize font-bold mr-2'><BadgeTextGradient text={icon.name} />
    </li>
  ));
  const iconlenght=iconList.length>4 ?  "flex-col" : "flex-row"
  return (
    <div className="flex flex-col items-center">
        <h2 className="text-white text-center text-[1.1rem]">Technologies</h2>
        <ul className={`flex  items-center ${iconlenght} justify-center  mt-4`}>
          {iconList}
        </ul>
    </div>
  );
}
  

