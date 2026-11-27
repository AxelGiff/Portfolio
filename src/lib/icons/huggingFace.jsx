import * as React from "react";

function IconHuggingFace(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="1em"
      height="1em"
      aria-hidden="true"
      {...props}
    >
      <circle cx="16" cy="15" r="11" fill="#FFD21E" />
      <circle cx="12" cy="13" r="1.4" fill="#1F2937" />
      <circle cx="20" cy="13" r="1.4" fill="#1F2937" />
      <ellipse cx="9.8" cy="16" rx="1.6" ry="1" fill="#FB923C" opacity="0.7" />
      <ellipse cx="22.2" cy="16" rx="1.6" ry="1" fill="#FB923C" opacity="0.7" />
      <path
        d="M11.5 17.5c1.1 2 2.8 3 4.5 3s3.4-1 4.5-3"
        fill="none"
        stroke="#1F2937"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M5.5 21.5c0-1.7 1.3-3 2.8-3 .9 0 1.7.5 2.2 1.3l1.3 2.1c.6 1 .2 2.3-.8 2.8-1 .5-2.3.1-2.9-.9l-2.1-3.3a2 2 0 0 1-.5-1zm21 0c0-1.7-1.3-3-2.8-3-.9 0-1.7.5-2.2 1.3l-1.3 2.1c-.6 1-.2 2.3.8 2.8 1 .5 2.3.1 2.9-.9l2.1-3.3c.3-.5.5-1 .5-1z"
        fill="#FFD21E"
        stroke="#1F2937"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconHuggingFace;
