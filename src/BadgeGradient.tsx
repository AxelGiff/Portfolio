import React from "react";

const BadgeTextGradient = ({color,text}) => {
    return (
      <span className='badge inline-flex mx-auto my-0 mb-12 items-center justify-center rounded-full border border-gray-800 bg-gray-950 px-3 py-1 text-xs font-medium text-gray-300 backdrop-blur-3xl'>
        <span className='badge-text bg-gradient-to-t from-[#fff] to-[#387ADF] bg-clip-text text-transparent'>
          {text}
        </span>
      </span>
    );
  };
  
  export default BadgeTextGradient;