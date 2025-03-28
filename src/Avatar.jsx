import React, { useState, memo, useCallback } from 'react';
import CardContainer from './CardContainer.jsx';

// Direct import instead of URL constructor
import avatarImage from './images/IMAGEAUTRE.png';

const Avatar = memo(() => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseOut = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div className="flex items-center justify-center">
      {isHovered && <CardContainer />}

      <div
        className="w-48 h-48 overflow-hidden rounded-full shadow-md cursor-pointer transition-transform duration-300 transform hover:scale-110 hover:grayscale"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <img
          className="circular--portrait-img"
          alt="me"
          src={avatarImage}
          loading="lazy"
        />
      </div>
    </div>
  );
});

export default Avatar;
