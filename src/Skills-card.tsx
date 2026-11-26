import React, { memo } from "react";
import IconBxlReact from "./lib/icons/react.jsx";
import IconBxlTailwindCss from "./lib/icons/tailwind.jsx";
import IconBxlVuejs from "./lib/icons/vue.jsx";
import IconLanguagePhp from "./lib/icons/php.jsx";
import IconBxlPostgresql from "./lib/icons/postgreSQL.jsx";
import IconMongoDB from "./lib/icons/mongoDB.jsx";
import IconBxlDocker from "./lib/icons/docker.jsx";
import IconDjango from "./lib/icons/django.jsx";
import IconFastAPI from "./lib/icons/fastApi.jsx";
import IconBxlJavascript from "./lib/icons/js.jsx";

const IconPython = () => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <path fill="#3776AB" d="M63.4 9.5c-27.7 0-26 12-26 12v12.4h26.5v3.7H26.9s-17.8-2-17.8 26 15.5 27 15.5 27h9.3V77.6s-.5-15.5 15.2-15.5h26.2s14.7.2 14.7-14.2V24.1S92.2 9.5 63.4 9.5zm-14.6 8.4c2.6 0 4.8 2.1 4.8 4.8 0 2.6-2.1 4.8-4.8 4.8-2.6 0-4.8-2.1-4.8-4.8 0-2.7 2.2-4.8 4.8-4.8z"/>
    <path fill="#FFD43B" d="M64.6 118.5c27.7 0 26-12 26-12V94.1H64.1v-3.7h37s17.8 2 17.8-26-15.5-27-15.5-27h-9.3v13s.5 15.5-15.2 15.5H52.7s-14.7-.2-14.7 14.2v23.8s-2.2 14.6 26.6 14.6zm14.6-8.4c-2.6 0-4.8-2.1-4.8-4.8 0-2.6 2.1-4.8 4.8-4.8 2.6 0 4.8 2.1 4.8 4.8 0 2.7-2.2 4.8-4.8 4.8z"/>
  </svg>
);

const IconGitLab = () => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <path fill="#E24329" d="M64 117.6L86.4 48.8H41.6L64 117.6z"/>
    <path fill="#FC6D26" d="M64 117.6L41.6 48.8H10.2L64 117.6z"/>
    <path fill="#FCA326" d="M10.2 48.8L3.4 69.7c-.6 1.9.1 4 1.7 5.2L64 117.6 10.2 48.8z"/>
    <path fill="#E24329" d="M10.2 48.8h31.4L28.1 7.4c-.7-2.1-3.7-2.1-4.4 0L10.2 48.8z"/>
    <path fill="#FC6D26" d="M64 117.6l22.4-68.8h31.4L64 117.6z"/>
    <path fill="#FCA326" d="M117.8 48.8l6.8 20.9c.6 1.9-.1 4-1.7 5.2L64 117.6l53.8-68.8z"/>
    <path fill="#E24329" d="M117.8 48.8H86.4l13.5-41.4c.7-2.1 3.7-2.1 4.4 0l13.5 41.4z"/>
  </svg>
);

const IconTypeScript = () => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="16" fill="#3178C6"/>
    <path fill="#fff" d="M70.6 67.5h-17v46.3H42.1V67.5h-17v-9.6h45.5v9.6zm35.8 31.3c0 9.6-7.6 15.8-19.6 15.8-7.4 0-14-2.1-17.8-5.1l3.6-8.9c3.4 2.5 8.6 4.5 14 4.5 5.4 0 8.5-2.1 8.5-5.6 0-3.2-2.2-4.8-9.3-7.3-10.1-3.6-15.4-8.3-15.4-16.4 0-9.1 7.4-15.4 18.8-15.4 6.5 0 11.7 1.6 15.1 3.8l-3.3 8.8c-2.8-1.7-7-3.2-11.8-3.2-5 0-7.7 2.2-7.7 5 0 3.3 2.7 4.7 9.9 7.3 10.5 3.8 15 8.5 15 16.7z"/>
  </svg>
);

const skills = [
  { name: "PHP 8 / Symfony", icon: <IconLanguagePhp />, glow: "hover:shadow-[0_0_28px_-6px_rgba(129,140,248,0.65)] hover:border-indigo-400/50" },
  { name: "Python", icon: <IconPython />, glow: "hover:shadow-[0_0_28px_-6px_rgba(96,165,250,0.65)] hover:border-blue-400/50" },
  { name: "Django", icon: <IconDjango />, glow: "hover:shadow-[0_0_28px_-6px_rgba(52,211,153,0.65)] hover:border-emerald-400/50" },
  { name: "FastAPI", icon: <IconFastAPI />, glow: "hover:shadow-[0_0_28px_-6px_rgba(45,212,191,0.65)] hover:border-teal-400/50" },
  { name: "TypeScript", icon: <IconTypeScript />, glow: "hover:shadow-[0_0_28px_-6px_rgba(49,120,198,0.75)] hover:border-sky-400/50" },
  { name: "React", icon: <IconBxlReact />, glow: "hover:shadow-[0_0_28px_-6px_rgba(34,211,238,0.65)] hover:border-cyan-400/50" },
  { name: "Nuxt / Vue.js", icon: <IconBxlVuejs />, glow: "hover:shadow-[0_0_28px_-6px_rgba(52,211,153,0.65)] hover:border-emerald-400/50" },
  { name: "Tailwind CSS", icon: <IconBxlTailwindCss />, glow: "hover:shadow-[0_0_28px_-6px_rgba(56,189,248,0.65)] hover:border-sky-400/50" },
  { name: "PostgreSQL", icon: <IconBxlPostgresql />, glow: "hover:shadow-[0_0_28px_-6px_rgba(101,152,194,0.7)] hover:border-sky-300/50" },
  { name: "MongoDB", icon: <IconMongoDB />, glow: "hover:shadow-[0_0_28px_-6px_rgba(74,222,128,0.65)] hover:border-green-400/50" },
  { name: "Docker", icon: <IconBxlDocker />, glow: "hover:shadow-[0_0_28px_-6px_rgba(0,145,226,0.75)] hover:border-sky-400/50" },
  { name: "CI/CD GitLab", icon: <IconGitLab />, glow: "hover:shadow-[0_0_28px_-6px_rgba(252,109,38,0.65)] hover:border-orange-400/50" },
];

export const CardHoverEffect = memo(function CardHoverEffect() {
  return (
    <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-8 py-10 sm:py-14">
      <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-4">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className={`group flex flex-col items-center justify-center gap-2 sm:gap-3 rounded-2xl border border-white/10 bg-neutral-950/90 px-2 py-4 sm:px-4 sm:py-6 transition-all duration-300 hover:-translate-y-1 hover:bg-black ${skill.glow}`}
          >
            <span
              aria-hidden="true"
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center [&>svg]:w-8 [&>svg]:h-8 sm:[&>svg]:w-10 sm:[&>svg]:h-10 transition-transform duration-300 group-hover:scale-110"
            >
              {skill.icon}
            </span>
            <span className="text-[11px] sm:text-xs font-medium text-neutral-300 group-hover:text-white transition-colors text-center leading-tight">
              {skill.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
});
