"use client";
import React, { useState } from "react";
import { FaqsArry } from "./Utail/faqs";
import { FaSortDown } from "react-icons/fa6";
import Image from "next/image";
function Frequently() {
  const [status, setStatus] = useState(Array(FaqsArry.length).fill(false));

  const toggleStatus = (index: number) => {
    setStatus((prevStatus) => {
      const newStatus = [...prevStatus];
      newStatus[index] = !newStatus[index];
      return newStatus;
    });
  };

  return (
    <div className="flex overflow-hidden relative justify-center items-center flex-col w-full pb-28 bg-[#F9F9F9]   ">
      <h1 className="text-4xl sm:text-5xl md:text-6xl px-3 lg:max-w-[60%] text-center  text-black font-bold my-24">
        Frequently Asking Questions
      </h1>
      <Image
        src="Images/vector1.svg"
        width={300}
        height={300}
        alt="Picture of the author"
        className="absolute  rotate 160 left-[-10%] bottom-[55%]   "
      />
      <svg
        className="absolute  lg:top-[55%] lg:left-[79.8%]   hidden lg:block  "
      width="258" height="476"
        viewBox="0 0 247 471"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
       <path d="M248.613 3.30983C292.463 135.207 105.157 96.9135 208.058 415.652" stroke="#46818F" stroke-dasharray="7 7"/>
       <path d="M81.6132 61.3098C125.463 193.207 -61.843 154.914 41.0583 473.652" stroke="#46818F" stroke-dasharray="7 7"/>
      </svg>
      

      <div className="flex justify-center  space-y-3   items-center w-full sm:w-[90%] md:w-[90%] lg:w-[80%] flex-col p-4">
        {FaqsArry.map((faq, index) => (
          <div
            key={index}
            className={`flex flex-col p-4 relative w-full transition-colors duration-300 rounded-sm ${
              status[index] ? "bg-[#EBEBEB]  rounded-sm" : " bg-[#FFFFFF]"
            }`}
          >
            <h2
              className={`md:text-[20px] py-2 text-[#333333]  duration-300 ${
                status[index] ? "font-semibold" : "font-light"
              }`}
            >
              {faq.question}
            </h2>

            <button
              onClick={() => toggleStatus(index)}
              className="absolute lg:left-[95%] md:left-[95%] left-[91%] text-lg focus:outline-none"
            >
              {status[index] ? (
                <FaSortDown color="#898B8E" className="w-5 h-5 rotate-180" />
              ) : (
                <FaSortDown color="#898B8E" className="w-5 h-5" />
              )}
            </button>
            <div
              className={`overflow-hidden  transition-all duration-300 ${
                status[index]
                  ? "opacity-100 max-h-[200px] "
                  : "max-h-0  opacity-0"
              }`}
            >
              <p className="text-sm    text-[#606267] font-light sm:text-sm md:text-base w-full p-1">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Frequently;
