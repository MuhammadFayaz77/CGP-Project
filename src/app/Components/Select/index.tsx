"use client";
import React from "react";
import { SelectCard } from "./card";

const dataArray = [
    {
        list: [
          "United Kingdome",
          "European union",
          "United States",
        ],
        number: "01",
        title: "Select country/market",
      },
      {
        list: [
          "United Kingdome",
          "European union",
          "United States",
        ],
        number: "02",
        title: "Select product modules",
      },
      {
        list: [
          "Technical specifications  ",
          "Components and materials ",
          "Other relevant specifications",
        ],
        number: "03",
        title: "Set  specifications",
      },
      {
        list: [
          "United Kingdome",
          "European union",
          "United States",
        ],
        number: "04",
        title: "Checklist  created",
      },
];

export default function Select() {
  return (
    <div className=" bg-[#F9F9F9] py-12 text-center text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 gap-4 max-w-6xl lg:px-0 px-5 sm:px-2 mx-auto ">
        {dataArray.map((card, index) => (
          <SelectCard
            key={index}
            number={card.number}
            title={card.title}
            list={card.list}
          />
        ))}
      </div>
    </div>
  );
}
