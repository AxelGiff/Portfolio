import React from 'react';

export default function ButtonGithub({ svg, link, label = 'Social profile' }) {
  return (
    <div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="Btn inline-flex items-center justify-center"
      >
        <span className="svgContainer" aria-hidden="true">
          {svg}
        </span>
        <span className="BG" aria-hidden="true"></span>
      </a>
    </div>
  );
}
