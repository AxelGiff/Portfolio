'use client';
import React from "react";

const TextShine = ({ text }) => {
  const isLong = typeof text === "string" && text.length > 18;
  const sizeClass = isLong
    ? "text-[clamp(2rem,4.8vw,4.5rem)]"
    : "text-[clamp(2.75rem,6.5vw,5.75rem)]";

  return (
    <h1
      className={`text-shine-heading block mx-auto text-center font-apple font-bold leading-[1.1] tracking-tight max-w-5xl px-2 ${sizeClass} bg-[linear-gradient(110deg,#f5f5f5_0%,#a3a3a3_45%,#ffffff_55%,#d4d4d4_100%)] bg-clip-text text-transparent`}
    >
      {text}
    </h1>
  );
};

export default TextShine;
