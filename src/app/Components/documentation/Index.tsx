"use client";
import React from "react";
import { DocumentationCard } from "./documentationCard";


const cardData = [
  {
    image: "Images/A.svg",
    title: "Risk Disclosure",
    points: ["Compliance Requirements Lists","Templates","Lab testing","Lab testing"],
 
    details: [],
  
    description:"This guide explains how the features of the Compliance Gate Platform were created. We also explain the limitations and risks of each feature."
  },
  {
    image: "Images/B.svg",
    title: "Do your own research",
    country:[],
    points: ["Compliance Requirements Lists","Templates","Lab testing","Lab testing"],
    details: [],
    description:"This guide explains how the features of the Compliance Gate Platform were created. We also explain the limitations and risks of each feature."
  
  },
  {
    image: "Images/B.svg",
    title: "Do your own research",
    country:[],
    points: ["Compliance Requirements Lists","Templates","Lab testing","Lab testing"],
    details: [],
    description:"This guide explains how the features of the Compliance Gate Platform were created. We also explain the limitations and risks of each feature."
  
  },
  {
    image: "Images/A.svg",
    title: "Risk Disclosure",
    points: ["Compliance Requirements Lists","Templates","Lab testing","Lab testing"],
 
    details: [],
  
    description:"This guide explains how the features of the Compliance Gate Platform were created. We also explain the limitations and risks of each feature."
  },
  {
    image: "Images/B.svg",
    title: "Template overview",
    country:[],
    points: ["Compliance Requirements Lists","Templates","Lab testing","Lab testing"],
    details: [],
    description:"This guide explains how the features of the Compliance Gate Platform were created. We also explain the limitations and risks of each feature."
  
  },
  {
    image: "Images/B.svg",
    title: "Do your own research",
    country:[],
    points: ["Compliance Requirements Lists","Templates","Lab testing","Lab testing"],
    details: [],
    description:"This guide explains how the features of the Compliance Gate Platform were created. We also explain the limitations and risks of each feature."
  
  }
];
import Image from 'next/image'
export default function Documentation() {
  return (
    <div className="relative  bg-[#F9F9F9] py-16 px-4 text-center flex flex-col items-center justify-center">
      <h2 className="text-2xl md:text-5xl font-semibold text-black mb-4">
      Documentation
      </h2>
      <p className="text-wrap lg:w-[40%] text-center text-[#000000BF] mb-7">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
      <Image
      src="/Images/line.svg"
      width={200}
      height={200}
      className=" absolute top-0   -translate-x-[200%] "
      alt="Picture of the author"
    />
      <div className="  mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
        {cardData.map((card, index) => (
          <DocumentationCard
            key={index}
            description={card.description}
            title={card.title}
            points={card.points}
          
            details={card.details}
       
          />
        ))}
      </div>
    </div>
  );
}
