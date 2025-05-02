"use client";
import React, { useState } from "react";
import Sco from "./Index";
import { FaUsersCog } from "react-icons/fa";
function AllCardSco() {
  const [activeTab, setActiveTab] = useState(0);
  const TabsArry = [
    { id: 0, title: "SCO", content: <Sco /> },
    { id: 1, title: "SCO", content: <Sco /> },
    { id: 2, title: "Marketing", content: <Sco /> },
    { id: 4, title: "Market", content: <Sco /> },
    { id: 5, title: "Advertising", content: <Sco /> },
    { id: 6, title: "Media", content: <Sco /> },
    { id: 7, title: "Branding", content: <Sco /> },
    { id: 8, title: "Digital", content: <Sco /> },
  ];

  return (
    <>
      <div className="bg-slate-50 pb-5 lg:pb-16">
        <div className="flex flex-col items-center px-3 justify-center pb-16 pt-10 bg-[#F9F9F9] text-black">
          <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold max-w-2xl text-center">
            See what’s inside
          </h1>
          <p className="max-w-2xl text-lg text-center mt-2">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>
        <div className="w-[90%] mx-auto bg-white shadow-md  rounded-2xl">
          {/* Tabs Section */}
          <div className="flex overflow-x-auto sm:flex-wrap gap-6 lg:gap-24 px-9 rounded-lg py-4 bg-white">
            {TabsArry.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-medium text-sm focus:outline-none whitespace-nowrap ${
                  activeTab === tab.id
                    ? "text-[#46818F] transform scale-105 transition-transform duration-300"
                    : "text-[#4C4C4CD1]"
                }`}
              >
                <div className="flex items-center flex-col">
                  <FaUsersCog size={30} />
                  <span>{tab.title}</span>
                  <div className="border-2 rounded-full px-[50%] lg:px-[75%] mt-1" />
                </div>
              </button>
            ))}
          </div>
          {/* Active Tab Content */}
          <div className="">
            {TabsArry.map((tab) => (
              <div
                key={tab.id}
                className={activeTab === tab.id ? "block" : "hidden"}
              >
                {tab.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllCardSco;
