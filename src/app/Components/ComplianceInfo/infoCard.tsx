import React from "react";

 export function InfoCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="shadow-[0px_-1px_7px_3px_#00000024] bg-white z-10 rounded  p-4 text-center hover:shadow-sm transition-shadow duration-300">
      <div className="mb-4 flex py-6 justify-center">{icon}</div>
      <h3 className="font-semibold text-md md:text-lg text-[#1E1E1E] mb-2 px-3">
        {title}
      </h3>
      <p className="text-sm text-[#4E4E4E]">{description}</p>
    </div>
  );
}
