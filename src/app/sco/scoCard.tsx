"use client";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
const ScoCard = ({
  image,
  description,
  list,
}: {
  image: any;
  description: string;
  list: string[];
}) => {
  return (
    <div className="  flex flex-col   md:flex-row items-center p-2 max-w-6xl mx-auto  min-h-[60vh]">
      <div className="lg:w-[75%] w-full  ">
        <h2 className="text-2xl lg:mb-9 lg:text-6xl font-semibold text-gray-800">
          {description}
        </h2>
        <ul className="space-y-2 mt-4 mb-9">
          {list.map((index,items) => (
            <li key={index} className="flex items-start text-gray-700 text-sm md:text-lg lg:text-xl ">
              <FaCheckCircle className="text-[#46818F]    mr-2" />
              {list[items]}
            </li>
          ))}
        </ul>
        <button className="mt- bg-[#46818F] text-white px-4 py-2 rounded-lg font-semibold text-sm shadow hover:bg-[#468189] transition">
          Try SEO toolkit
        </button>
      </div>
      <div className=" lg:w-[70%] w-full lG:flex justify-center  md:mt-0  hidden md:block ">
        <Image
          src={image}
          width={550}
          height={550}
          alt="SEO Metrics Image"
          className="w-auto h-auto max-w-full"
        />
      </div>
    </div>
  );
};

export default ScoCard;
