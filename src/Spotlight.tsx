import React from "react";
import { cn } from "./lib/utils.tsx";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export const Spotlight = ({ className, fill }: SpotlightProps) => {
  const color = fill || "white";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1] h-[140vh] w-[140vw] opacity-0",
        className
      )}
    >
      <div
        className="w-full h-full"
        style={{
          opacity: 0.22,
          transform: "rotate(-26deg)",
          background: `radial-gradient(ellipse 42% 20% at 48% 45%, ${color} 0%, transparent 72%)`,
        }}
      />
    </div>
  );
};
