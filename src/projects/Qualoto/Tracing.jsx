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
      <Tabs tabs={tabs} tabClassName="text-white" />
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
        At Qualoto, players begin by registering with a unique username. The system enforces strict validation—rejecting duplicates or empty entries (even those with only spaces) and returning descriptive error messages in JSON. Once registered, each player receives a ticket that records their draw participation, including draw date and chosen numbers, ensuring secure and traceable access throughout the game.
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
       Qualoto features a dynamic drawing system where real players and randomized bots receive lottery numbers. When a draw is initiated, every participant is assigned a ticket containing their main and bonus numbers. A dedicated form lets players manually select their numbers or use a “Flash” option for random generation. The system then simulates the draw, ensuring fair assignment of numbers and adherence to the game’s strict rules.
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
        After each lottery draw, Qualoto computes a ranking to identify the top winners. The ranking algorithm compares players’ tickets with the drawn numbers—regardless of order—and allocates prizes based on predefined percentage distributions (e.g., 40%, 20%, etc.). In cases where players share identical winning numbers, the system fairly splits the prize percentage between them, ensuring an equitable distribution of gains. This robust ranking process guarantees transparency and fairness in every draw.
        </p>
      </>
    ),
    badge: "Ranking",
    image: new URL("./images/classement.png", import.meta.url).href,
  },
];
