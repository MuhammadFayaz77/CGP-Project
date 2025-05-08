"use client";
import React, { useState } from "react";
import PlanCard from "./planCard";
import { MonthlyArry, YearlyArry } from "../Utail/Plan";

export default function Plan() {
  const [isMonthly, setIsMonthly] = useState(true);

  const CurrentData = isMonthly ? MonthlyArry : YearlyArry;

  return (
    <div className="flex relative  justify-center items-center lg:px-4  lg:pb-16 bg-[#F9F9F9]  ">
   

      <div className="w-full flex flex-col justify-center items-center max-w-7xl">
        <div className="text-center mb-6 px-4">
          <h1 className="text-xl sm:text-2xl flex flex-col md:text-5xl text-black font-semibold">
            Choose Plan <span>That’s Right For You</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-lg mx-auto mt-2">
            Choose plan that works best for you, feel free to contact us
          </p>
        </div>

        <div className="inline-flex p-1 bg-[#FFFFFF]  border-gray-300 rounded-md mb-16">
          <button
            onClick={() => setIsMonthly(true)}
            className={`px-5 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-[#46818F] hover:text-white ${
              isMonthly ? "lg:text-black  lg:bg-white text-white bg-[#46818F]" : "text-[#52525B]"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsMonthly(false)}
            className={`px-5 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-[#46818F] hover:text-white ${
              !isMonthly ? "lg:text-black lg:bg-white text-white bg-[#46818F]" : "text-[#52525B]"
            }`}
          >
            Yearly
          </button>
        </div>
        <div className="grid grid-cols-1        justyfy-center items-center      sm:grid-cols-2 lg:grid-cols-3 gap-4  md:w-[90%] lg:w-[90%] px-4">
          {CurrentData.map((items, index) => (
            <PlanCard
              key={index}
              bg={items.bg}
              pakg={items.pakg}
              button={items.button}
              price={items.price}
              features={items.features}
              description={items.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
