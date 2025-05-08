"use client";
import React from "react";
import { PlatformCard } from "./platformCard";

const cardData = [
  {
    image: "Images/A.svg",
    title: "Hire Consultant",
    points: ["He will charge 2000+ USD/EUR per product"],
    option: "A",
    details: [
      "Research requirements, create certificates, labels, and manage testing. (But still a good option if you have the budget for it)",
    ],
    yes: "Images/no.svg",
  },
  {
    image: "Images/B.svg",
    title: "Do your own research",
    option: "B",
    points: [
      "20+ hours spent per product",
      "Overwhelming, frustrating, and mind numbingly boring",
      "You must stay up to date",
    ],
    details: [],
    yes: "Images/no.svg",
  },
  {
    image: "Images/C.svg",
    title: "Compliance Gate Platform",
    description: "Affordable",
    option: "C",
    points: [
      "Affordable",
      "More streamlined process",
      "We update the platform regularly ",
    ],
    details: [],
    yes: "Images/yes.svg",
  },
];

export default function Platform() {
  return (
    <div className="bg-[#2E2E2E]   py-16 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
        How is this platform different?
      </h2>
      <p className="text-sm md:text-base text-c max-w-4xl mx-auto text-[#FFFFFF8F]">
        Hiring consultants to manage the compliance process for you can set you
        back
        <span className="text-white font-semibold">
          {" "}
          2000 USD/EUR or more per product.
        </span>
        The other option is to spend hours searching legislation databases on
        your own. We created the Compliance Gate Platform as an
        <span className="text-white font-semibold">
          {" "}
          affordable alternative
        </span>
        that can simplify many of the steps of the process.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {cardData.map((card, index) => (
          <PlatformCard
            key={index}
            image={card.image}
            title={card.title}
            points={card.points}
            option={card.option}
            details={card.details}
            yes={card.yes}
          />
        ))}
      </div>

    
      <div className="mt-10 flex justify-center">
        <button className="bg-[#3b6d77] text-white font-medium min-w-[45%]  mt-[%] flex flex-col justify-center items-center py-3 px-6 rounded-md hover:bg-[#46818F] transition-all">
          <h1 className="text-lg font-bold">Start 7-Days Free Trial</h1>
          <p className="text-sm font-light">No credit card required</p>
        </button>
      </div>
    </div>
  );
}
