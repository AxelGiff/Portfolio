import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export const MovingLine = () => {
  const transition = {
    duration: 14,
    ease: "easeInOut",
  };

  const ref = useRef(null);

  // Track scroll progress, lies between 0 and 1.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  // when scroll progress reached 1, path length becomes 0.
  const pathLengthValue = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const PATH = "M0.5 0.980671L0.5 1566.02";
  return (
    <div
      className="max-w-4xl mx-auto flex flex-row space-x-10 items-start w-full"
      ref={ref}
    >
      <svg
        width="1"
        height="1567"
        viewBox="0 0 1 1567"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <path d={PATH} stroke="url(#paint0_linear_207_38)" />
        <defs>
          <linearGradient
            id="paint0_linear_207_38"
            x1="1"
            y1="-102.823"
            x2="1"
            y2="1566.02"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3879E7" stopOpacity="0" />
            <stop offset="1" stopColor="#3879E7" />
          </linearGradient>
        </defs>
        <motion.path
          // animating pathLength value, goes from 1 to 0
          style={{
            pathLength: useSpring(pathLengthValue, {
              stiffness: 500,
              damping: 100,
            }),
          }}
          transition={transition}
          d={PATH}
          stroke="var(--blue-500)"
          strokeOpacity="1"
          strokeLinecap={"round"}
          strokeWidth="3"
        />
      </svg>
      <div className="flex flex-col w-full">
        <Content image1={new URL("./images/Image20.png", import.meta.url).href} image2={new URL("./images/Image19.png", import.meta.url).href} />
        <Content image1={new URL("./images/distribb2.png", import.meta.url).href} image2={new URL("./images/predagevalidb2.png", import.meta.url).href} />
        <Content image1={new URL("./images/imageAxel.png", import.meta.url).href} image2={new URL("./images/imageStatham.png", import.meta.url).href} /> 
      </div>
    </div>
  );
};

/* dummy content to fill up the screen */

export const Content = ({ image1 = "/placeholder-image.jpg", image2 = "/placeholder-image.jpg", alt1 = "Image 1", alt2 = "Image 2" }) => {
  return (
    <div className="content w-full mb-10">
      <p className="text-2xl font-bold text-white">
        The path follows the scroll
      </p>
      <p className="text-base font-normal text-neutral-300">
        If you look closely, you can see the path is being animated.
      </p>
      <div className="flex space-x-4 w-full">
        <img 
          src={image1} 
          alt={alt1}
          className="w-full h-40 md:h-96 rounded-md mt-4 object-cover shadow-lg" 
        />
        <img 
          src={image2} 
          alt={alt2}
          className="w-full h-40 md:h-96 rounded-md mt-4 object-cover shadow-lg" 
        />
      </div>
    </div>
  );
};