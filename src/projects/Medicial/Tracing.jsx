"use client";
import React from "react";
import { TracingBeam } from "../../tracing-beam.tsx";
import { Tabs } from "../../tabs.tsx";

export function TracingBeamDemo() {
  const tabs = [
    {
      title: "Authentication",
      value: "Authentication",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-l md:text-4xl font-bold text-white bg-gradient-to-br from-[#1B3A6B] to-[#2C5282]">
          <p>1. Authentication</p>
          <img
            src={new URL("./images/auth.png", import.meta.url).href}
            alt="screen todo list"
            loading="lazy"
            className="object-contain object-top w-full -bottom-2 inset-x-0 rounded-xl mx-auto absolute h-auto"
          />
        </div>
      ),
    },
    {
      title: "Grid choice",
      value: "Grid choice",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-l md:text-4xl font-bold text-white bg-gradient-to-br from-[#1B3A6B] to-[#2C5282]">
          <p>2. Grid choice</p>
          <img
            src={new URL("./images/grille.png", import.meta.url).href}
            alt="screen todo list"
            loading="lazy"
            className="object-contain object-top w-full -bottom-2 inset-x-0 rounded-xl mx-auto absolute h-auto"
          />
        </div>
      ),
    },
    {
      title: "Player list",
      value: "Player list",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-l md:text-4xl font-bold text-white bg-gradient-to-br from-[#1B3A6B] to-[#2C5282]">
          <p>3. Player list</p>
          <img
            src={new URL("./images/tiragesort.png", import.meta.url).href}
            alt="screen todo list"
            loading="lazy"
            className="object-contain object-top w-full -bottom-2 inset-x-0 rounded-xl mx-auto absolute h-auto"
          />
        </div>
      ),
    },
    {
      title: "Draw",
      value: "Draw",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-l md:text-4xl font-bold text-white bg-gradient-to-br from-[#1B3A6B] to-[#2C5282]">
          <p>4. Draw</p>
          <img
            src={new URL("./images/tirage.png", import.meta.url).href}
            alt="screen todo list"
            loading="lazy"
            className="object-contain object-top w-full -bottom-2 inset-x-0 rounded-xl mx-auto absolute h-auto"
          />
        </div>
      ),
    },
    {
      title: "Ranking",
      value: "Ranking",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-l md:text-4xl font-bold text-white bg-gradient-to-br from-[#1B3A6B] to-[#2C5282]">
          <p>5. Ranking</p>
          <img
            src={new URL("./images/classement.png", import.meta.url).href}
            alt="screen todo list"
            loading="lazy"
            className="object-contain object-top w-full -bottom-2 inset-x-0 rounded-xl mx-auto absolute h-auto"
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
        <Tabs tabs={tabs} />
      </div>
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased mt-24 pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-orange-600 text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <p className="text-xl text-white mb-4">{item.title}</p>

              <div className="text-sm text-white prose prose-sm dark:prose-invert">
                {item?.image && (
                  <img
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </>
  );
}

const dummyContent = [
  {
    title: "An authentication system for tracking progress",
    description: (
      <>
        <p>
          Recently, I developed a web application on the SafePage platform,
          specializing in personal development. This application provides users
          with a secure platform to track and enhance their personal growth. It
          offers various tools such as goal management, habit tracking, and
          planning for personal development activities. SafePage thus provides
          a friendly and secure environment to support users on their journey
          towards personal fulfillment.
        </p>
        <p>
          Additionally, in the future, the Moov'Page application will be
          accessible on mobile platforms once I have mastered Swift, React
          Native, and Kotlin for mobile app development.
        </p>
      </>
    ),
    badge: "Authentication",
    image: new URL("./images/auth.png", import.meta.url).href,
  },
  {
    title: "A drawing system with real players or bots",
    description: (
      <>
        <p>
          Within the SafePage platform, I'm also involved in creating
          productivity-focused articles for users. These articles aim to provide
          practical tips and proven strategies to help users enhance their
          efficiency and organization in their daily lives. Collaborating
          closely with SafePage's editorial team, I strive to produce relevant
          and engaging content that addresses the needs and challenges of our
          user community, assisting them in reaching their goals and maximizing
          their potential.
        </p>
      </>
    ),
    badge: "Drawn",
    image: new URL("./images/tiragesort.png", import.meta.url).href,
  },
  {
    title: "A ranking system with an equitable prize distribution algorithm",
    description: (
      <>
        <p>
          SafePage is an evolving project that I am currently working on. I am
          continuously exploring new features and functionalities to enhance the
          user experience and provide a more comprehensive platform for personal
          development. By collaborating with other team members and
          incorporating user feedback, I aim to create a dynamic and
          user-friendly environment that empowers users to achieve their
          personal growth goals effectively.
        </p>
      </>
    ),
    badge: "Ranking",
    image: new URL("./images/classement.png", import.meta.url).href,
  },
];