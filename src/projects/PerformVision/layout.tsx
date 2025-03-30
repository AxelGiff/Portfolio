"use client";
import React, { memo } from "react";
import { LayoutGrid } from "./layout-grid.tsx";
import { useTranslation } from 'react-i18next';

import gestionnaireListeImg from "./images/gestionnaireliste.png";
import ajouterImg from "./images/Ajouter.png";
import creneauxImg from "./images/creneaux.png";
import tableauBdlImg from "./images/Tableau_bdl.png";

const SkeletonOne = memo(() => {
  const { t } = useTranslation();
  return (
    <div>
      <p className="font-bold text-4xl text-white">{t('performvision.role.title')}</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {t('performvision.role.description')}
      </p>
    </div>
  );
});

const SkeletonTwo = memo(() => {
  const { t } = useTranslation();
  return (
    <div>
      <p className="font-bold text-4xl text-white">{t('performvision.client.title')}</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {t('performvision.client.description')}
      </p>
    </div>
  );
});

const SkeletonThree = memo(() => {
  const { t } = useTranslation();
  return (
    <div>
      <p className="font-bold text-4xl text-white">{t('performvision.deliveryNote.title')}</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {t('performvision.deliveryNote.description')}
      </p>
    </div>
  );
});

const SkeletonFour = memo(() => {
  const { t } = useTranslation();
  return (
    <div>
      <p className="font-bold text-4xl text-white">{t('performvision.history.title')}</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {t('performvision.history.description')}
      </p>
    </div>
  );
});

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: gestionnaireListeImg,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: ajouterImg,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: creneauxImg,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: tableauBdlImg,
  },
];

export const LayoutGridDemo = memo(() => (
  <div className="h-screen py-20 w-full">
    <LayoutGrid cards={cards} />
  </div>
));
