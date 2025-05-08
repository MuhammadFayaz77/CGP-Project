import React from "react";

export function SelectCard({
  number,
  title,
  list,
}: {
  number?: string;
  title: string;
  list: string[];
}) {
  return (
    <div className="text-start border  bg-[#EBEBEB] p-4 rounded-md">
      <div className="flex justify-start text-3xl  text-[#B9B7B7]  font-bold ">{number}</div>
      <h1 className="font-semibold text-md md:text-lg   px-2 text-[#353434B8]">
        {title}
      </h1>
      <ul className="list-disc list-inside space-y-1 pb-9 px-6 text-sm text-[#0000005C]">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
