"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function PlatformCard({
  image,
  title,
  points,
  option,
  details,
  yes,
}: {
  image: string;
  title: string;
  points?: string[];
  option: string;
  details?: string[];
  yes?: any;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "tween", stiffness: 300 }}
      className="flex flex-col items-center justify-center text-center"
    >
      <div className="flex flex-col items-center ">
        <div className="text-white text-2xl font-bold bg-[#46818F] rounded-full py-2 px-4">
          {option}
        </div>
        <div className="h-5 w-[1px] border border-dashed border-white" />
      </div>
      <div className="shadow-[0px_-1px_7px_3px_#00000024] bg-[#FFFFFF] rounded p-4 w-full max-w-sm hover:shadow-sm transition-shadow duration-300 min-h-[450px] flex flex-col">
        <div className="flex justify-center">
          <Image
            src={image}
            alt="icon"
            width={100}
            height={100}
            className="object-contain w-[90%] h-[90%]"
          />
        </div>
        <div className="flex flex-col text-start px-3">
          <h3 className="font-semibold text-md md:text-lg text-[#1E1E1E]">
            {title}
          </h3>
          <ul className="mt-2 space-y-1 ">
            {points.map((points, i) => (
              <li
                key={i}
                className="text-base justify-start items-center  flex  "
              >
                <span className="flex justify-start items-start gap-2   ">
                  <Image
                    src={yes}
                    alt="icon"
                    width={15}
                    height={15}
                    className=" w-[15px] h-[15px] mt-1"
                  />

                  <span className="text-[#4E4E4E] text-base">{points}</span>
                </span>
              </li>
            ))}
          </ul>
          <p>
            <ul className="mt-2 space-y-1">
              {details.map((detail, i) => (
                <li key={i} className="text-[13px] text-[#4E4E4E]">
                  <span>
                    <span className="text-[#46818F] font-semibold">
                      {" "}
                      Scope:{" "}
                    </span>
                    {detail}
                  </span>
                </li>
              ))}
            </ul>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
