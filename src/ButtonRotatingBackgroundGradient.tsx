import React from 'react';

const ButtonRotatingBackgroundGradient = ({text}) => {
    return (
      <button className="font-sans text-base items-center h-12 rounded-md font-semibold px-3 text-dark border-none cursor-pointer shadow-md bg-white hover:bg-gray-200">
      {text}
    </button>
    );
  };
  
  export default ButtonRotatingBackgroundGradient;