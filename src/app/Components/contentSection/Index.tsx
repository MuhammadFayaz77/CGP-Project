"use client";
import React from "react";
import { ContentCard } from "./contentCard";
import { ContentArry } from "../Utail/ContentArry";

export default function ComplianceInfo() {
  return (
    <div className="bg-[#2E2E2E] py-20 text-center text-white">
      <div className="flex flex-col items-start max-w-6xl mx-auto mb-8 ">
        <h1 className="text-2xl sm:text-4xl font-semibold mb-2">
          Step into a Content Section
        </h1>
        <p className="text-[12px] text-start text-gray-300 w-[38%] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse s
        </p>
      </div>

      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
        {ContentArry.map((card, index) => (
          <ContentCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}
