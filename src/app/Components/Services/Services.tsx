"use client";
import { useState } from "react";


export const ServicesCard = ({
  icon,
  title,
  description,
}: {
  icon: string; 
  title: string;
  description: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Expand = () => setIsExpanded(!isExpanded);

  const truncatedDescription =
    description.length > 100 ? description.slice(10, 100) + "..." : description;

  return (
    <div className="bg-[#F9F9F9] ">
      <div className="flex flex-col justify-between bg-[#FFFFFF]  rounded-2xl shadow-md p-6 w-full text-left">
        <div>
          <img src={icon} alt="icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-semibold text-gray-900 whitespace-pre-line">
            {title}
          </h2>
         
          <p className="text-sm text-[#7A8088] mt-12">
            {isExpanded ? description : truncatedDescription}
          </p>
        </div>
      </div>
      <div className="mt-9">
        <button
          className="w-full bg-[#3D7A8A] text-white text-sm font-medium py-2 rounded-xl hover:bg-[#356A77] transition"
          onClick={Expand}
        >
          {isExpanded ? "Show less" : "Learn more"}
        </button>
      </div>
    </div>
  );
};
