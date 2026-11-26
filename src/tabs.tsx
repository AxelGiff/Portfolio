import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "./lib/utils.tsx";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [activeValue, setActiveValue] = useState<string>(propTabs[0]?.value ?? "");
  const [hovering, setHovering] = useState(false);

  const activeIdx = Math.max(
    0,
    propTabs.findIndex((t) => t.value === activeValue)
  );
  const active = propTabs[activeIdx] ?? propTabs[0];
  const orderedTabs = [
    propTabs[activeIdx],
    ...propTabs.slice(0, activeIdx),
    ...propTabs.slice(activeIdx + 1),
  ].filter(Boolean);

  return (
    <>
      <div
        role="tablist"
        aria-label="Project sections"
        className={cn(
          "relative z-40 flex flex-row flex-wrap items-center justify-start gap-1.5 max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab) => {
          const isSelected = active?.value === tab.value;
          return (
            <button
              key={tab.value}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveValue(tab.value)}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className={cn(
                "relative z-40 px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer select-none",
                isSelected ? "text-white" : "text-neutral-400 hover:text-white",
                tabClassName
              )}
            >
              {isSelected && (
                <motion.div
                  layoutId="clickedbutton"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.45 }}
                  className={cn(
                    "absolute inset-0 bg-white/15 border border-white/25 backdrop-blur-md rounded-full pointer-events-none",
                    activeTabClassName
                  )}
                />
              )}

              <span className="relative z-10 block pointer-events-none">
                {tab.title}
              </span>
            </button>
          );
        })}
      </div>
      <FadeInDiv
        tabs={orderedTabs}
        active={active}
        hovering={hovering}
        className={cn("mt-14 md:mt-20", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  return (
    <div className="relative z-10 w-full h-full">
      {tabs.map((tab, idx) => {
        const isFront = idx === 0;
        return (
          <motion.div
            key={tab.value}
            initial={false}
            animate={{
              scale: 1 - idx * 0.06,
              y: hovering ? idx * -16 : idx * 10,
              opacity: idx < 3 ? (isFront ? 1 : 0.45 - idx * 0.15) : 0,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            style={{
              zIndex: tabs.length - idx,
              pointerEvents: isFront ? "auto" : "none",
            }}
            className={cn("w-full h-full absolute top-0 left-0", className)}
          >
            {tab.content}
          </motion.div>
        );
      })}
    </div>
  );
};