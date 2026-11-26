import React, { useState, memo, useCallback } from 'react';
import CardContainer from './CardContainer.jsx';
import avatarImage from './images/IMAGEAUTRE.webp';

const Avatar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);
  const handleToggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <div className="flex items-center justify-center relative">
      {isOpen && <CardContainer />}

      <button
        type="button"
        aria-label="Afficher la présentation rapide d'Axel Giffard"
        aria-expanded={isOpen}
        className="w-40 h-40 sm:w-48 sm:h-48 overflow-hidden rounded-full border border-white/15 shadow-lg cursor-pointer transition-transform duration-300 transform hover:scale-105 focus-visible:scale-105 hover:grayscale"
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        onFocus={handleOpen}
        onBlur={handleClose}
        onClick={handleToggle}
      >
        <img
          className="circular--portrait-img"
          alt="Portrait d'Axel Giffard"
          src={avatarImage}
          decoding="async"
          fetchPriority="high"
        />
      </button>
    </div>
  );
});

export default Avatar;
