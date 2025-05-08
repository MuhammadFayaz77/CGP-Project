"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaUsersCog } from "react-icons/fa";
import Sco from "./Index";

import { IoStarSharp } from "react-icons/io5";

import { LiaFlagUsaSolid } from "react-icons/lia";
import StarRate from "../Components/Star";
export default function ComplianceChecklist() {
  const [domain, setDomain] = useState("");
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

  const Items = [
    "country 1",
    "country 1",
    "country 1",
    "country 1",
    "country 1",
  ];
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center justify-center pb-16 px-4 bg-gray-50">
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center space-x-1">
           <span className="mb-2"> <IoStarSharp size={35} color="#04DA8D" /></span>
            <span className="text-[#000000] text-xl font-bold">Trustpilot</span>
          </div>
            <span className=""> <StarRate/></span>
          <div className="text-sm text-gray-500 mt-1">
            Trust score <strong>4.6</strong> | 57 reviews
          </div>
        </div>
        <h1 className="lg:text-4xl md:text-3xl text-xl font-bold text-center text-[#3A3A3AD1] mb-8">
          Create customized <br />
          <span className="text-[#3A3A3AD1]">
            compliance checklists in minutes
          </span>
        </h1>
        <div className="flex items-center w-full max-w-4xl space-x-2">
      
         
          <div className="flex flex-1 rounded-lg bg-[#FFFFFF] shadow-[0px_-2px_13px_1px_rgba(0,_0,_0,_0.1)]  overflow-hidden">
            <input
              type="text"
              placeholder="Enter domain or URL"
              className="flex-grow px-4 py-4 text-sm text-gray-700 outline-none"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            />
            <div className="flex items-center px-4 border-l border-gray-200 space-x-2">
              <div className="flex text-black items-center space-x-1">
                <div className="w-6 h-6 rounded-full overflow-hidden flex justify-center items-center bg-gray-100">
                  <LiaFlagUsaSolid className=" text-red-500" />
                </div>
                <span>🇺🇸</span>
              </div>
              <button
                onClick={() => setShow(!show)}
                className="flex items-center space-x-1 "
              >
                <ChevronDown className="w-4 h-4 text-gray-500" />
                {show && (
                  <ul className="absolute mt-60 mr-24 flex text-black flex-col  bg-white  rounded p-2">
                    {Items.map((item, index) => (
                      <li
                        key={index}
                        className="py-1 px-2 hover:bg-gray-200 rounded"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </button>
            </div>
          </div>

          {/* Start Button */}
          <button className="bg-[#46818F]  text-white text-sm font-semibold px-6 py-4 rounded-lg shadow-lg">
            Start Now
          </button>
        </div>
      </div>
      <div className="bg-slate-50 pb-5 lg:pb-16">
        <div className="w-[90%] mx-auto bg-white shadow-md  rounded-2xl">
          {/* Tabs Section */}
          <div className="flex overflow-x-auto no-scrollbar gap-12 lg:gap-24 px-9 rounded-lg py-4 bg-white">
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
