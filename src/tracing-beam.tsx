"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
} from "framer-motion";
import { cn } from "./lib/utils.tsx";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const updateHeight = () => {
      setSvgHeight(el.offsetHeight);
    };
    updateHeight();

    if (typeof ResizeObserver === "function") {
      const ro = new ResizeObserver(updateHeight);
      ro.observe(el);
      return () => ro.disconnect();
    }
    return undefined;
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, Math.max(50, svgHeight - 200)]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative mt-24 w-full max-w-4xl mx-auto h-full", className)}
    >
      <div className="absolute mt-24 -left-4 md:-left-20 top-3">
        <div className="ml-[27px] mt-24 h-4 w-4 rounded-full border border-neutral-200 shadow-sm flex items-center justify-center">
          <div
            className="h-2 w-2 rounded-full border bg-white border-white"
            style={{ backgroundColor: "#10b981", borderColor: "#059669" }}
          />
        </div>

        {/* 2eme Rond */}
        <div className="ml-[27px] absolute bottom-1/3 h-4 w-4 rounded-full border border-neutral-200 shadow-sm flex items-center justify-center">
          <div
            className="h-2 w-2 rounded-full border bg-white border-white"
            style={{ backgroundColor: "#10b981", borderColor: "#059669" }}
          />
        </div>

        {/* 3eme Rond */}
        <div className="ml-[27px] absolute top-1/3 h-4 w-4 rounded-full border border-neutral-200 shadow-sm flex items-center justify-center">
          <div
            className="h-2 w-2 rounded-full border bg-white border-white"
            style={{ backgroundColor: "#10b981", borderColor: "#059669" }}
          />
        </div>

        <svg
          viewBox={`0 0 20 ${svgHeight || 1}`}
          width="20"
          height={svgHeight || 1}
          className="ml-[1rem] block"
          aria-hidden="true"
        >
          <path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="white"
            strokeOpacity="0.4"
          />
          <path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
          />
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC"></stop>
              <stop offset="0.325" stopColor="#6344F5"></stop>
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
