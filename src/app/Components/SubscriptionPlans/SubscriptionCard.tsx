import React from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

const SubscriptionCard= ({
  
  Popular,
  time,
  icon,
  button,
  pakg,
  price,
  current,
  description,
  features,
  style,
  bg,
  most,
}: {

  most?:string;
  time:string;
  Popular?:string;
  pakg: string;
  button:string;
  icon: string;
  style:string; 
  price: string;
  current: string;
  bg:string;
  description: string;
  features: string[];
}) => {
  return (
    <div className="w-full relative sm:w-[100%] md:w-[100%] lg:w-[100%px] border border-[#E4E4E7] rounded-xl p-4  mx-auto shadow-[0px_4px_8px_0px_#00000024]">
      <h1 className={`absolute rounded-full text-[12px]  top-[-2.5%] ${most} bg-[#E33C12] `}> {Popular}</h1>
      <div className="flex items-start justify-between py-3 ">
        <div className="bg-[#E33C1221] p-2 rounded-lg ">
          <Image src={icon} alt="icon" width={24} height={24} />
        </div>
        <h2 className={`text-sm font-bold text-black  ${style}`}
        >{pakg}</h2>
      </div>
      <div className="mb-6">
        <div>
          <span className={`text-3xl  text-black ${style} `}>${price}</span>
          <span className="text-gray-500 text-sm"> {time}</span>
        </div>
        <p className="text-sm text-gray-500 pt-3">{description}</p>
      </div>
      <h1 className="text-black  font-bold">What’s included:</h1>

      <ul className="space-y-2  pt-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className={`h-4 w-4 mt-1 text-green-500 mr-2 ${style} flex-shrink-0`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div className=" flex flex-col">
              <span className={`text-gray-700 text-sm sm:text-base ${style}`}>
                {feature}
              </span>
              <span className="text-sm text-[#52525BA6]">{current}</span>
            </div>
          </li>
        ))}
      </ul>

      <button className={` text-[#E33C12]  flex justify-center w-full mt-4 py-2  border   border-[#E4E4E7] rounded-md font-medium text-sm sm:text-base ${bg} `}>
       {button} <h1 className="mt-1 w-4"><IoIosArrowRoundForward  /></h1>
      </button>
      
    </div>
  );
};

export default SubscriptionCard;
