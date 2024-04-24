import React from 'react';

const BadgeAnimatedGradientBorder = () => {
    return (
      <span className='relative top-4 inline-block overflow-hidden rounded-full p-[1px]'>
        <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#387ADF_0%,#FFFF_50%,#387ADF_100%)]' />
        <div className='inline-flex h-full w-full  items-center justify-center rounded-full bg-gray-950 px-6 py-1 text-xs font-bold  text-gray-50 backdrop-blur-3xl'>
         Full Stack Developer
        </div>
      </span>
    );
  };
  
  export default BadgeAnimatedGradientBorder;
