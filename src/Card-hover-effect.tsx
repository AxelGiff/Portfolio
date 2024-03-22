import { cn } from "./lib/utils.tsx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import React from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className={cn(
                  'absolute inset-0 h-full w-full block rounded-3xl',
                  {
                    'bg-neutral-200 dark:bg-gray-200/[0.3]': true, // Fallback background
                    'bg-green-500 dark:bg-[#149ECA]/[0.5]': item.title === 'React', // Green background for "React"
                    'bg-blue-500 dark:bg-[#7A86B8]/[0.8]': item.title === 'PHP', // Blue background for "PHP"
                    'bg-blue-500 dark:bg-[#38BDF8]/[0.8]': item.title === 'Tailwind CSS', // Blue background for "PHP"
                    'bg-blue-500 dark:bg-[#327859]/[0.8]': item.title === 'Vue.js', // Blue background for "PHP"
                    'bg-blue-500 dark:bg-[#6598C2]/[0.8]': item.title === 'PostgreSQL', // Blue background for "PHP"
                    'bg-blue-500 dark:bg-[#5EAE46]/[0.8]': item.title === 'Node.js', // Blue background for "PHP"
                    'bg-blue-500 dark:bg-[#F34E1E]/[0.8]': item.title === 'Figma - Photoshop', // Blue background for "PHP"
                    'bg-blue-500 dark:bg-[#FFFF]/[0.8]': item.title === 'Notion', // Blue background for "PHP"
                    'bg-blue-500 dark:bg-[#0F8CC3]/[0.8]': item.title === 'WordPress', // Blue background for "PHP"
                    // Add more conditions for other titles as needed
                  }
                )}
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
            <CardTitle>{item.title}</CardTitle>
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
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
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
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const isSpecialTitle =
    children === 'React' || children === 'PHP' || children === 'PostgreSQL' || children === 'Tailwind CSS';

  const titleClass = cn(
    'text-zinc-100 font-bold tracking-wide mt-4',
    isSpecialTitle && 'text-gradient-primary3',
    className
  );

  return <h4 className={titleClass}>{children}</h4>;
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
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
