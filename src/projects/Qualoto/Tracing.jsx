"use client";
import React from "react";
import { TracingBeam } from "../../tracing-beam.tsx";
import { Tabs } from "../../tabs.tsx";
import { useTranslation } from 'react-i18next';

export function TracingBeamDemo() {
      const { t } = useTranslation();
      const dummyContent = [
        {
          title: t('Authentication_title'),
          description: (
            <>
              <p>
                {t('Authentication_description')}
              </p>
             
            </>
          ),
          badge: t('Authentication'),
          image: new URL("./images/auth.png", import.meta.url).href,
        },
        {
          title: t('Draw_title'),
          description: (
            <>
              <p>
                {t('Draw_description')}
              </p>
            </>
          ),
          badge: t('Draw'),
          image: new URL("./images/tiragesort.png", import.meta.url).href,
        },
        {
          title: t('Ranking_title'),
          description: (
            <>
              <p>
                {t('Ranking_description')}
              </p>
            </>
          ),
          badge: t('Ranking'),
          image: new URL("./images/classement.png", import.meta.url).href,
        },
      ];
  const tabs = [
    {
      title: t('Authentication'),
      value: "Authentication",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-l md:text-4xl font-bold text-white bg-gradient-to-br from-[#1B3A6B] to-[#2C5282]">
          <p>1. {t('Authentication')}</p> 
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
      title:t('Grid choice'),
      value: "Grid choice",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-l md:text-4xl font-bold text-white bg-gradient-to-br from-[#1B3A6B] to-[#2C5282]">
          <p>2. {t('Grid choice')}</p>
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
      title: t('Player list'),
      value: "Player list",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-l md:text-4xl font-bold text-white bg-gradient-to-br from-[#1B3A6B] to-[#2C5282]">
          <p>3. {t('Player list')}</p>
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
      title: t('Draw'),
      value: "Draw",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-l md:text-4xl font-bold text-white bg-gradient-to-br from-[#1B3A6B] to-[#2C5282]">
          <p>4. {t('Draw')}</p>
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
      title: t('Ranking'),
      value: "Ranking",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-l md:text-4xl font-bold text-white bg-gradient-to-br from-[#1B3A6B] to-[#2C5282]">
          <p>5. {t('Ranking')}</p>
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

