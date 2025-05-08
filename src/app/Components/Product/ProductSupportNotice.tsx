"use client";
import React from "react";

import { FaCircleCheck } from "react-icons/fa6";
export default function ProductSupportNotice() {
  return (
    <div className="bg-[#2E2E2E] text-center text-white py-12 px-4">
      <h2 className="text-xl sm:text-3xl font-semibold mb-4">
        Can’t find your product?
      </h2>
      <p className="text-sm sm:text-base  lg:text-lg  max-w-4xl mx-auto">
        The Compliance Gate supplements, Platform useful for most consumer
        products, even if not mentioned above.
        <br />
        However, the platform{" "}
        <span className="text-[#EA4545] font-medium   ">
          does not cover
        </span>{" "}
        cosmetics, medical devices, supplements, chemicals, and food and
        beverages.
      </p>
      <p className="text-sm sm:text-base mt-12">
        <span className="text-[#EA4545] font-semibold">Note:</span> the platform
        only covers the items listed in the Monthly Review Methodology documents
        linked below:
      </p>
      <div className="flex flex-wrap lg:justify-center lg:items-center lg:gap-16 mt-6 gap-4">
        <span className="flex gap-2  text-lg items-center justify-center">
          {" "}
          <FaCircleCheck color="#46818F" size={25} className="" />
          United States{" "}
        </span>
        <span className="flex gap-2 text-lg items-center justify-center">
          {" "}
          <FaCircleCheck color="#46818F" size={25} className="" />
          United Kingdom{" "}
        </span>
        <span className="flex gap-2  text-lg items-center justify-center">
          <FaCircleCheck
            color="#46818F"
            size={25}
            className=" "
            strokeOpacity={32}
            strokeWidth={1.0}
            
          />
          European Union
        </span>
      </div>
    </div>
  );
}
