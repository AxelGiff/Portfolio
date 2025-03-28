"use client";
import React, { memo } from "react";
import { LayoutGrid } from "./layout-grid.tsx";

import gestionnaireListeImg from "./images/gestionnaireliste.png";
import ajouterImg from "./images/Ajouter.png";
import creneauxImg from "./images/creneaux.png";
import tableauBdlImg from "./images/Tableau_bdl.png";

const SkeletonOne = memo(() => (
  <div>
    <p className="font-bold text-4xl text-white">Roles</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      As a manager and administrator, these roles can add different members such as: service providers, contacts, sales representatives, and clients.
    </p>
  </div>
));

const SkeletonTwo = memo(() => (
  <div>
    <p className="font-bold text-4xl text-white">Create a client</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      We can also create a client by providing their contact details as well as assigning the client to one or more sales representatives
    </p>
  </div>
));

const SkeletonThree = memo(() => (
  <div>
    <p className="font-bold text-4xl text-white">Delivery Note</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      The primary objective is to be able to create delivery notes per month, with different periods: Day, Half-day, and Time slots. The half-day must be indicated by the morning or evening period, while the time slot must be specified between a departure and arrival time.
    </p>
  </div>
));

const SkeletonFour = memo(() => (
  <div>
    <p className="font-bold text-4xl text-white">Delivery Note History</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      To analyze delivery notes effectively, it is necessary to have a history of the latest delivery notes where we can view the delivery notes over the course of the month.
    </p>
  </div>
));

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
