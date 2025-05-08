"use client";
import Image from "next/image";
import { MdFacebook } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

export const TeamCard = ({
  image,
  title,
  description,
  postion,
}: {
  image: string;
  title: string;
  description: string;
  postion: string;
}) => {
  return (
    <div className=" w-full">
      <div className="flex flex-col justify-center items-center p-2  ">
        <div>
          <Image
            src={image}
            alt="icon"
            width={250}
            height={250}
            className="mb-6 rounded-full w-full h-full object-cover transition-transform duration-300 transform hover:scale-105    "
          />
        </div>
        <h2 className="text-lg  font-semibold text-gray-900   whitespace-pre-line">
          {title}
        </h2>
        
        <p className="text-sm text-[#46818F]">{postion}</p>
        <p className="text-[14px] text-[#7A8088] text-center min-h-[70px] ">{description}</p>
        <div className="flex gap-2 mt-2 text-[#ACAEB4]  text-[20px] ">
          <span className=" hover:text-[#46818F]  ">
            {" "}
            <MdFacebook />
          </span>
          <span className=" hover:text-[#46818F]  ">
            <IoLogoGithub />
          </span>
          <span className=" hover:text-[#46818F]">
            {" "}
            <FaLinkedin />
          </span>
        </div>
        
      </div>
    </div>
  );
};
