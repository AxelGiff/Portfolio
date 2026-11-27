"use client";
import React from "react";
import { AnimatedTooltip } from "./animated-tooltip.tsx";
const people = [
  {
    id: 1,
    name: "Axel Giffard",
    designation: "FullStack Developper",
    image: new URL("../../images/blanc.webp", import.meta.url).href,
  },
  {
    id: 2,
    name: "Samia Ouchallal",
    designation: "Backend Developper",
    image:
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=75",
  },      

  {
    id: 3,
    name: "Kavusikan Thurairajasingam",
    designation: "Data Developper",
    image:
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=160&q=75",
},
  {
    id: 4,
    name: "Fulya Rizaoglu",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=160&q=75",
  },
  {
    id: 5,
    name: "Moustapha Camara",
    designation: "Frontend Developper",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=75",
  },
 
  {
    id: 6,
    name: "Axel Giffard",
    designation: "Web Developper",
    image: new URL("../../images/blanc.webp", import.meta.url).href,
  },
  {
    id: 7,
    name: "Samia Ouchallal",
    designation: "Backend Developper",
    image:
    "https://images.unsplash.com/photo-1738000033806-bef61bcd7465?auto=format&fit=crop&w=160&q=75",
  },
  {
    id: 8,
    name: "India Cabo",
    designation: "Backend Developper",
    image:
    "https://images.unsplash.com/photo-1489667897015-bf7a9e45c284?auto=format&fit=crop&w=160&q=75",
  },
  {
    id: 9,
    name: "Fayçal Hamsek",
    designation: "Backend Developper",
    image:
    "https://images.unsplash.com/photo-1584984647264-7e6f4e6d6b91?auto=format&fit=crop&w=160&q=75",
  },
];

export function AnimatedTooltipPreview({ ids }) {
  // Filtrer les personnes selon les IDs fournis
  const filteredPeople = people.filter(person => ids.includes(person.id));
  
  return (
    <div className="flex flex-row items-center gap-6 justify-center mb-10 mt-6 w-full">
      <AnimatedTooltip items={filteredPeople} />
    </div>
  );
}
