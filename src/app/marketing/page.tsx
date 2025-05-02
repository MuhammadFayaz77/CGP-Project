"use client";
import React, { useState } from "react";
import Marketing from "."; // Make sure this path is correct
import Image from 'next/image'
function AllCard() {
  const [activeTab, setActiveTab] = useState(0);

  // Sample data for each tab
  const TabsArry = [
    { id: 0, title: "Marketing", content: <Marketing /> },
    { id: 1, title: "SCO", content: <Marketing /> },
    { id: 2, title: "Content Marketing", content: <Marketing /> },
    { id: 4, title: "Market Research", content: <Marketing /> },
    { id: 5, title: "Advertising", content: <Marketing /> },
    { id: 6, title: "Social Media", content: <Marketing /> },
  ];

  return (
    <>
    <div className="flex  flex-col items-center  justify-center px-4 pb-16 pt-10 bg-[#F9F9F9] text-black">
      <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold max-w-2xl text-center">Here’s why marketers Loves Compliance Gate Platform </h1>
      <p className=" max-w-2xl text-lg text-center">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
    </div>
      <div className="flex  relative justify-center items-center pb-9 pt-2 bg-[#F9F9F9]">
      <Image
            src="Images/scroll.svg"
            width={200}
            height={200}
            alt="Picture of the author"
            className=" lg:left-[15%] left-[19%] absolute lg:top-[380%] overflow-hidden  transform -translate-x-1/2  hidden lg:block "
          />
      <Image
            src="Images/scroll.svg"
            width={200}
            height={200}
            alt="Picture of the author"
            className=" lg:left-[75%] left-[59%] absolute rotate-180 top-[65%] overflow-hidden  transform -translate-x-1/2 "
          />
        <div className="flex  px-2 sm:flex-nowrap gap-2 sm:gap-4 w-[90%] lg:justify-between bg-[#F9F9F9] overflow-x-auto py-2">
          {TabsArry.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-3 rounded-full border border-[#00000061] font-medium text-sm focus:outline-none whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-[#46818F] text-white transform scale-105 transition-transform duration-300"
                  : "text-[#4C4C4CD1]"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        
      </div>

      {TabsArry.map((tab) => (
        <div key={tab.id} className={activeTab === tab.id ? "block" : "hidden"}>
          {tab.content}
        </div>

      ))}
    </>
  );
}

export default AllCard;
