'use client';
import React, { useState } from 'react';
import { MonthlyArry, YearlyArry } from '../Utail/SubscriptionArry';
import SubscriptionCard from './SubscriptionCard';
// hello


export default function Subscription() {
  const [isMonthly, setIsMonthly] = useState(true);

  const CurrentData = isMonthly ? MonthlyArry : YearlyArry;

  return (
    <div className="flex justify-center items-center lg:px-4 py-10 bg-[#FFFFFF] ">
      <div className="w-full flex flex-col justify-center items-center max-w-7xl">
        <div className="text-center mb-6 px-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-[#E33C12] font-semibold">
            Expand Your Creative Arsenal
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-lg mx-auto mt-2">
            Access a daily selection of high-quality samples, or unlock premium plans for more creative freedom.
          </p>
        </div>

        <div className="inline-flex p-1 bg-white border border-gray-300 rounded-full mb-8">
        <button
  onClick={() => setIsMonthly(true)}
  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-[#e6391d] hover:text-white ${
    isMonthly ? 'text-black bg-white' : 'text-[#52525B]'
  }`}
>
  Monthly
</button>
<button
  onClick={() => setIsMonthly(false)}
  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-[#e6391d] hover:text-white ${
    !isMonthly ? 'text-black bg-white' : 'text-[#52525B]'
  }`}
>
  Yearly
</button>

        </div>

        <div className="grid grid-cols-1  xs:grid-cols-2      justyfy-center items-center      sm:grid-cols-2 lg:grid-cols-3 gap-4  md:w-[90%] lg:w-[90%] px-4">
          {CurrentData.map((items, index) => (
            <SubscriptionCard
              key={index}
              Popular={items.Popular}
              time={items.time}
              bg={items.bg}
              most={items.most}
              icon={items.icon}
              pakg={items.pakg}
        
              button={items.button}
              style={items.style}
              price={items.price}
              current={items.current}
              features={items.features}
              description={items.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
