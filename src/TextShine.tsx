'use client';
import React from "react";

const TextShine = ({ text }) => {
  const isLong = typeof text === "string" && text.length > 18;
  const sizeClass = isLong
    ? "text-[clamp(2rem,4.8vw,4.5rem)]"
    : "text-[clamp(2.75rem,6.5vw,5.75rem)]";

  return (
    <h1
      className={`block mx-auto text-center font-apple font-bold leading-[1.1] tracking-tight max-w-5xl px-2 ${sizeClass} animate-background-shine bg-[linear-gradient(110deg,#E1E1E1,45%,#939393,55%,#E1E1E1)] bg-[length:250%_100%] bg-clip-text text-transparent`}
    >
      {text}
    </h1>
  );
};

export default TextShine;
