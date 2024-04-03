import React from 'react';

const ButtonRotatingBackgroundGradient = ({text,link}) => {
    return (
  
     
      <a href={link} target="_blank" rel="noreferrer" role="button"> 
      <button type="button" className="font-sans text-base items-center h-12 rounded-md font-semibold px-3 text-dark border-none cursor-pointer shadow-md bg-white hover:bg-gray-200">
      {text}
    </button></a> 
  
    );
  };
  
  export default ButtonRotatingBackgroundGradient;