import React from "react";

export function ContentCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group bg-[#2E2E2E] py-4 px-6 relative border-l-[1.5px] border-[#FFFFFF] text-start">
      <h1 className="border-[#ACACAC] border-l-4 py-3 absolute rounded-r-md left-0 bottom-[47%] group-hover:py-6  transition-all duration-300 group-hover:border-[#46818F]"></h1>
      <div className="flex justify-start mb-4 ">{icon}</div>
      <h3 className="font-semibold text-md md:text-lg  mb-2 text-white">
        {title}
      </h3>
      <p className="text-sm text-pretty text-[#B1B1B1] ">{description}</p>
    </div>
  );
}
