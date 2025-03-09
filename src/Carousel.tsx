"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";
import { Link } from 'react-router-dom';

import IconBxlReact from "./lib/icons/react.jsx";
import IconBxlMySQL from "./lib/icons/mySQL.jsx";
import IconBxlJavascript from "./lib/icons/js.jsx";
import IconLanguagePhp from "./lib/icons/php.jsx";
import IconBxlCss3 from "./lib/icons/css.jsx";
import IconHtml5 from "./lib/icons/html.jsx";
import IconWordpress from "./lib/icons/wordPress.jsx";
import IconBxlPostgresql from "./lib/icons/postgreSQL.jsx";
import IconBxlTailwindCss from "./lib/icons/tailwind.jsx";
import IconFigma from "./lib/icons/figma.jsx";
import IconNotion from "./lib/icons/notion.jsx";
import IconDjango from "./lib/icons/django.jsx";
import IconKeras from "./lib/icons/keras.jsx";
import IconTensorFlow from "./lib/icons/tensorFlow.jsx";
import IconHuggingFace from "./lib/icons/huggingFace.jsx";
import IconScikitLearn from "./lib/icons/scikitLearn.jsx";
import IconGradio from "./lib/icons/gradio.jsx";
interface SlideData {
  id: string; 
  title: string;
  button: string;
  src: string;
}
 
interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}


const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>();
  // Filtrer les icônes à afficher
  const icons = [
    { key: 12, name: "Django", image: <IconDjango /> },
    { key: 1, name: "React", image: <IconBxlReact /> },
    { key: 2, name: "CSS", image: <IconBxlCss3 /> },
    { key: 3, name: "HTML", image: <IconHtml5 /> },
    { key: 4, name: "JS", image: <IconBxlJavascript /> },
    { key: 5, name: "WordPress", image: <IconWordpress /> },
    { key: 8, name: "Tailwind", image: <IconBxlTailwindCss /> },
    { key: 6, name: "MySQL", image: <IconBxlMySQL /> },
    { key: 7, name: "PostgreSQL", image: <IconBxlPostgresql /> },
    { key: 9, name: "Figma", image: <IconFigma /> },
    { key: 10, name: "PHP", image: <IconLanguagePhp /> },
    { key: 11, name: "Notion", image: <IconNotion /> },
    {key:13,name:"Keras",image:<IconKeras/>},
    {key:14,name:"TensorFlow",image:<IconTensorFlow/>},
    {key:15,name:"HuggingFace",image:<IconHuggingFace/>},
    {key:17,name:"ScikitLearn",image:<IconScikitLearn/>},
    {key:18,name:"Gradio",image:<IconGradio/>}
    
  ];

  const filteredIcons = icons.filter((icon) =>
    slide.iconsToShow?.includes(icon.name)
  );

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, button, title, id } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
     <li
  ref={slideRef}
  className={`relative flex flex-col items-center justify-center text-center text-white transition-all duration-300 ease-in-out mx-4 z-10`}
  onClick={() => handleSlideClick(index)}
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
  style={{
    transform:
      current !== index
        ? "scale(0.98) rotateX(8deg)"
        : "scale(1) rotateX(0deg)",
    transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    transformOrigin: "bottom",
  }}
>
  <div
    className="relative w-[80vmin] h-[45vmin] bg-[#1D1F2F] rounded-lg overflow-hidden"
    style={{
      transform:
        current === index
          ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
          : "none",
    }}
  >
    <img
      className="absolute inset-0 w-full h-full object-cover"
      alt={title}
      src={src}
      onLoad={imageLoaded}
    />
    {current === index && (
      <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
    )}
  </div>
  <article
className={`absolute inset-0 flex flex-col justify-center items-center p-[4vmin] transition-opacity duration-1000 ease-in-out ${
current === index ? "opacity-100 visible" : "opacity-0 invisible"
}`}
>
<h2 className="text-lg md:text-2xl lg:text-4xl font-semibold relative">
{title}
</h2>
<ul className="flex flex-row items-center justify-center gap-3 mt-4">
            {filteredIcons.map((icon) => (
              <li key={icon.key}>{icon.image}</li>
            ))}
          </ul>
<div className="flex justify-center">
<Link to={`/projects/${id}`}>
<button className="mt-6 px-4 py-2 w-fit mx-auto sm:text-sm text-black bg-white h-12 border border-transparent text-xs flex justify-center items-center rounded-2xl hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
{button}
</button>
</Link>

</div>
</article>
    
</li>

    </div>
  );
};
 
interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}
 
const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  );
};
 
interface CarouselProps {
  slides: SlideData[];
}
 
export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);
 
  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };
 
  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };
 
  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };
 
  const id = useId();
 
  return (
    <div
      className="relative w-[70vmin] h-[70vmin] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>
 
      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
 
        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}