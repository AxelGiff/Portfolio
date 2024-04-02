import React from "react";
import { cn } from "./lib/utils.tsx";
import { Spotlight } from "./Spotlight.tsx";
 
export function SpotlightPreview({fill}) {
  return (
    <div>
      <Spotlight
        className="-top-40 left-0 md:left-96 md:-top-30"
        fill={fill}
      />
     
    </div>
  );
}