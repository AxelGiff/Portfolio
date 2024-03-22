import React from 'react';

const BlurryBackgroundSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 450" opacity="0.47">
      <defs>
        <filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="26" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
        </filter>
      </defs>
      <g filter="url(#bbblurry-filter)">
        <ellipse rx="145.5" ry="143" cx="232.36851346577896" cy="361.29713440753926" fill="hsla(0, 0%, 24%, 1.00)"></ellipse>
        <ellipse rx="145.5" ry="143" cx="413.0645181546038" cy="293.0811118879868" fill="hsla(200, 42%, 17%, 1.00)"></ellipse>
        <ellipse rx="145.5" ry="143" cx="493.9110195299718" cy="510.7004631002536" fill="hsla(0, 0%, 100%, 1.00)"></ellipse>
      </g>
    </svg>
  );
};

export default BlurryBackgroundSVG;