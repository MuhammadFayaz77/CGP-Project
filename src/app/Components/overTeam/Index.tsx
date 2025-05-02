"use client";
import React from "react";
import { TeamCard } from "./teamCard";
import { TeamArry } from "../Utail/team";
import { IoMdArrowForward } from "react-icons/io";
import { RiTeamLine } from "react-icons/ri";
import { FaCircleArrowRight } from "react-icons/fa6";
export default function Team() {
    
  return (
    <div className="flex flex-col items-center justify-center bg-[#F9F9F9] py-20">
      <div className="w-[85%] flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
        <div className="flex-1">
          <button className="mb-4 justify-center items-center gap-1 text-[10px] px-1 py-1 text-[#46818F] bg-[#EFEBFE] flex rounded">
            {" "}
            <span>
              <RiTeamLine />
            </span>
            over Team
          </button>
          <h1 className="text-3xl sm:text-4xl  lg:text-5xl font-bold text-black">
            Meet our Core Team
          </h1>
          <p className="text-[#0000008F] text-[14px] mt-4">
            Complete the form below to send us a message. Our support team will
            promptly respond to your request.
          </p>
        </div>
        <div className="flex gap-2  lg:mt-10 flex-wrap">
          <button className="px-2 py-2 rounded-lg hover:bg-[#46818F]  text-black text-[12px] hover:text-white flex items-center gap-2 transition-transform duration-300 transform hover:scale-105  ">
            Get Started <IoMdArrowForward />
          </button>
          <button className="px-2 py-2 rounded-lg hover:bg-[#46818F]  text-black   text-[12px] hover:text-white flex items-center gap-2 transition-transform duration-300 transform hover:scale-105 ">
            Contact Us <IoMdArrowForward />
          </button>
        </div>
      </div>
      <div className="lg:max-w-[70%] grid-cols-1 md:grid-cols-3  xs:grid-cols-2 grid  sm:grid-cols-2 lg:grid-cols-4 md:px-5 lg:px-0 px-2 mx-auto lg:gap-0 md:gap-4 gap-2">
        {TeamArry.map((items, index) => (
          <TeamCard
            key={index}
            image={items.image}
            title={items.title}
            description={items.description}
            postion={items.postion}
          />
        ))}
      </div>
      <button className="  flex  gap-32 mt-16  justify-between items-center px-4 py-2 bg-[#FFFFFF] border-[1.5px] rounded-md border-[#D4D4D8] text-gray-400 text-[16px] ">learn more... <span className="bg"> <FaCircleArrowRight size={25} color="#46818F" /></span></button>
    </div>
  );
}
