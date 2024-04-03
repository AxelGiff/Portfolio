"use client";
import * as React from 'react';
import { CardStack } from "./card-stack.tsx";
import { cn } from "../../lib/utils.tsx";


export function CardStackDemo() {
  return (
    <div className="h-[40rem] gap-16 flex items-center flex-row justify-center ">
      <CardStack items={CARDS_SEO} />
      <CardStack items={CARDS_Performance} />
      <CardStack items={CARDS_Accessibilite} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-amber-100 text-amber-700 dark:bg-amber-700/[0.2] dark:text-amber-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS_SEO = [
  {
    id: 0,
    name: "SEO",
    designation: "Searching Keywords",
    content: (
      <p>
        I spearheaded a strategic keyword research,<Highlight>carving our company's digital path towards SEO peaks</Highlight> where each selected word is a precious gem crafted to propel our online presence to new horizons.
      </p>
    ),
  },
  {
    id: 1,
    name: "SEO",
    designation: "Alt text",
    content: (
      <p>
        Adding alternative text is a <Highlight>crucial phase</Highlight> in optimizing SEO. That's why each image was equipped with alternative text incorporating the <Highlight>company's keywords.</Highlight>
 
      </p>
    ),
  },
  {
    id: 2,
    name: "SEO",
    designation: "Call to Action (CTA)",
    content: (
      <p>
        I created <Highlight>call-to-action buttons</Highlight> for the website designed to <Highlight>guide</Highlight> the user and <Highlight>entice</Highlight> them to click.
        
       
      </p>
    ),
  },
];
const CARDS_Performance= [
  {
    id: 0,
    name: "Page Performance",
    designation: "Image Optimization",
    content: (
      <p>
       I compressed the images to a maximum height of <Highlight>200 KB</Highlight> to improve the page speed index.🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Page Performance",
    designation: "Tag structure",
    content: (
      <p>
        The proper use of Hn tags is crucial for effectively structuring the web page{" "}
        <Highlight>there by enhancing user experience and fostering overall optimization</Highlight> 
      </p>
    ),
  },
  {
    id: 2,
    name: "Page Performance",
    designation: "Compressing JavaScript, HTML, and CSS elements",
    content: (
      <p>
        In using pluggins in WordPress such as Divi, I was able to <Highlight>compress the size of JavaScript, HTML, and CSS elements</Highlight> to improve the page speed index. Indeed, these pluggins with the right configuration, they can be a <Highlight>powerful ally.</Highlight>🙏
        
      </p>
    ),
  },
];
const CARDS_Accessibilite= [
  {
    id: 0,
    name: "Accessibility",
    designation: "Text optimization",
    content: (
      <p>
        To enhance accessibility for individuals with disabilities, it's important to adapt your text while considering certain rules such as <Highlight>word wrapping</Highlight> and avoiding <Highlight>text justification</Highlight>
      </p>
    ),
  },
  {
    id: 1,
    name: "Accessibility",
    designation: "Responsive content adaptation",
    content: (
      <p>
       Again, to enhance accessibility for individuals with disabilities, it's important to adapt the website in different formats such as <Highlight>mobile</Highlight> and <Highlight>tablet</Highlight> versions.
        It cas also improve the SEO performance, and usually makes the website more <Highlight>user-friendly</Highlight> and more  <Highlight>attractive</Highlight>🙏
      </p>
    ),
  },
  
];