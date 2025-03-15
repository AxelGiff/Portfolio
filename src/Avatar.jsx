import React, { useState } from 'react';
import CardContainer from './CardContainer.jsx';

export default function Avatar() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex items-center justify-center">
      {isHovered ? <CardContainer /> : ''}

      <div
        className="w-48 h-48 overflow-hidden rounded-full shadow-md cursor-pointer transition-transform duration-300 transform hover:scale-110 hover:grayscale"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <img
          className="circular--portrait-img"
          alt="me"
          src={new URL("./images/IMAGEAUTRE.png", import.meta.url).href}
        />
      </div>
    </div>
  );
}