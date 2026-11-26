import { cn } from "./lib/utils.tsx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import React from "react";

export type HoverSkillItem = {
  title: string;
  description: string;
  link: string;
  icon?: React.ReactNode;
  hoverColor?: string;
};

export const HoverEffect = ({
  items,
  className,
}: {
  items: HoverSkillItem[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item.link}
          key={`${item.title}-${idx}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full block rounded-3xl"
                style={{
                  backgroundColor: item.hoverColor || "rgba(56, 189, 248, 0.35)",
                }}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle icon={item.icon}>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-white/[0.18] group-hover:border-white/35 transition-colors relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  icon,
  children,
}: {
  className?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "text-zinc-100 font-bold tracking-wide mt-2 flex items-center justify-between gap-3",
        className
      )}
    >
      <h4 className="text-lg text-white">{children}</h4>
      {icon && (
        <div
          aria-hidden="true"
          className="w-7 h-7 flex items-center justify-center shrink-0 [&>svg]:w-7 [&>svg]:h-7"
        >
          {icon}
        </div>
      )}
    </div>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-5 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
