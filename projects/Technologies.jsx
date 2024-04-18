import React from 'react'
import BadgeTextGradient from '../BadgeGradient.tsx';

export default function Technologies({iconsToShow,bgcolor}) {

    
  const icons=[
    {
      key : 1,
      name : "React",
    
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
    }
  ]

  const filteredIcons = icons.filter(icon => iconsToShow.includes(icon.name));

  const iconList = filteredIcons.map((icon, index) => (
    <li key={index} className='px-3 py-2 rounded-md text-sm capitalize font-bold mr-2'><BadgeTextGradient text={icon.name} />
    </li>
  ));
  return (
    <div className="flex flex-col items-center">
        <h2 className="text-white text-center text-[1.1rem]">Technologies</h2>
        <ul className="flex flex-row items-center justify-center  mt-4">
          {iconList}
        </ul>
    </div>
  );
}
  

