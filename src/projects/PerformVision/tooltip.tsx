"use client";
import React from "react";
import { AnimatedTooltip } from "./animated-tooltip.tsx";
const people = [
  {
    id: 1,
    name: "Axel Giffard",
    designation: "FullStack Developper",
    image:
      require("../../images/blanc.png"),
  },
  {
    id: 2,
    name: "Samia Ouchallal",
    designation: "Backend Developper",
    image:
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },      

  {
    id: 3,
    name: "Kavusikan Thurairajasingam",
    designation: "Data Developper",
    image:
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
},
  {
    id: 4,
    name: "Fulya Rizaoglu",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Moustapha Camara",
    designation: "Frontend Developper",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
 
  {
    id: 6,
    name: "Axel Giffard",
    designation: "Web Developper",
    image:
    require("../../images/blanc.png"),
  },
  {
    id: 7,
    name: "Cindy Lhermite",
    designation: "CEO & Web Designer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

export function AnimatedTooltipPreview({number,old}) {
  return (
    <div className="flex flex-row items-center gap-6 justify-center mb-10 mt-6 w-full">
      <AnimatedTooltip items={people.slice(old,number)} />
    </div>
  );
}
