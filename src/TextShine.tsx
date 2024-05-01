'use client';
import React from "react";

const TextShine = ({ text }) => {
  let big_text = text === "Level Up Tech Consulting" ? "text-3xl xl:text-8xl" : "text-[3rem]";
  return (
    <h1 className={`inline-flex font-apple ${big_text}  animate-background-shine bg-[linear-gradient(110deg,#E1E1E1,45%,#939393,55%,#E1E1E1)] bg-[length:250%_100%] bg-clip-text text-transparent text-[3rem] lg:text-8xl `}>
      {text}
    </h1>
  );
};
export default TextShine;