// PlanCard.tsx
import React from 'react';


interface PlanCardProps {
  pakg: string;
  price: string;
  description: string;
  features: string[];
  button: string;
  bg:string
  highlighted?: boolean;
}

const PlanCard = ({
  pakg,
  price,
  description,
  features,
  button,


}: PlanCardProps) => {
  return (
    <div
      className={`w-full relative max-w-sm mx-auto group hover:bg-[#46818F] bg-[#FFFFFF]  rounded-2xl p-4  border transition-all hover:scale-105`}
    >
      <div className="absolute inset-0 flex justify-center items-end group-hover:rounded-b-2xl -z-10 overflow-hidden">
        <div
          className="w-[500px] h-[440px] bg-[#47676E] rounded-t-full opacity-0 
          group-hover:opacity-100 transition-opacity duration-500"
        />
      </div>

      <div className="text-2xl font-semibold group-hover:text-white  text-center text-black mb-2">{pakg}</div>
      <p className="text-center  lg:px-[12%] group-hover:text-white text-[#A6A6A6] text-lg mb-4">{description}</p>

      {/* Price */}
      <div className="mt-6 text-center py-2 relative group-hover:text-white text-black">
        <div className="text-xl absolute  left-[31%] mb-3">$</div>
        <div className="text-5xl font-bold">{price}</div>
      </div>

      {/* Features + Button Container */}
      <div className="mt-6 bg-[#F9FAFB] z-10 hover:bg-[#FFFFFF] rounded-xl p-5">
        <ul className="space-y-4 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-base font-medium">
              <svg
                className={`h-5 w-5 mt-1 mr-2 flex-shrink-0 rounded-full bg-[#46818F] `}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-[#191A15] md:text-lg lg:mt-0 mt-1">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button
            className={`w-full sm:w-4/5 border py-3 rounded-md font-medium text-sm flex justify-center items-center gap-1 transition  text-[#46818F]  group-hover:bg-[#46818F] group-hover:text-white `}
          >
            {button}
            
          </button>
        </div>
      </div>
      </div>
  
  );
};

export default PlanCard;
