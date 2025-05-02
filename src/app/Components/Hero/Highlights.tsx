import React from 'react'
type Highlight = {
    title: string;
    description: string;
    style?: string;
  };
  
  const highlights = [
    {
      title: "7-Day Free Trial",
      description: "No credit card required",
      style: "mt-9",
    },
    {
      title: "Save Hours",
      description: "Find product requirements in 2 min instead of 5 hours",
      style: "",
    },
    {
      title: "User-Friendly",
      description: "Created for non-experts and busy professionals",
      style: "",
    },
  ];
export default function Highlights() {
    
  return (
  
     <div className="w-full bg-[#F9F9F9] lg:py-10 overflow-hidden">
      <div className="max-w-9xl mx-auto flex flex-col md:flex-row justify-between items-center divide-y md:divide-y-0  md:divide-x-1  divide-[#46818F] lg:divide-x-2   ">
        {highlights.map((item, index) => (
          <div key={index} className="flex-1  text-center px-6 py-6  ">
            <h2 className="text-[#46818F] text-4xl font-bold">{item.title}</h2>
            <p className={`text-gray-600 text-lg mt-2 w-70 mx-auto leading-snug ${item.style}`}>{item.description}</p>
            </div>
        
        ))}
     
   
      </div>
     </div>
    
  )
}
