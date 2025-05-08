import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import Highlights from "./Highlights";
import Image from 'next/image'
export default function FindUs() {
  const list = [
    "Create customized compliance checklists",
    "Create product certificates and label files",
    "Get your products lab tested customized ",
  ];

  return (
    <div
      className="flex flex-col items-center justify-center w-full lg:pt-24 bg-[#F9F9F9]">
      <div className="w-[95%] max-w-7xl relative text-[#46818F] z-20">
      <div className="absolute -z-10  left-[20%]">
        <Image
          src="/Images/hero.svg"
          alt="Picture of the author"
          width={1000}
          height={900}
          className="w-full h-full object-cover  "
          />
      </div>
      <div className="absolute -z-20  lg:top-[16%] lg:left-[74%]  top-[50%] ">
        <Image
          src="/Images/Vector1.svg"
          alt="Picture of the author"
          width={300}
          height={300}
          className="w-full lg:h-[250px] h-[100px] object-cover  "
          />
      </div>
      <div className="absolute -z-20  lg:top-[79%] lg:left-[50%]  left-[50%] top-[24%] ">
        <Image
          src="/Images/Vector2.svg"
          alt="Picture of the author"
          width={300}
          height={300}
          className="w-full lg:h-[150px] h-[120px]  object-cover  "
          />
      </div>
      <div className="absolute -z-20  lg:top-[79%] lg:left-[50%]  left-[50%] top-[24%] ">
        <Image
          src="/Images/Vector2.svg"
          alt="Picture of the author"
          width={300}
          height={300}
          className="w-full lg:h-[150px] h-[120px]  object-cover  "
          />
      </div>
      <svg   className="absolute -z-20  lg:top-[69%] lg:left-[5%]  hidden lg:block  " width="290" height="430" viewBox="0 0 247 471" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.7036 0.467545C-36.1467 132.365 151.16 94.0712 48.2585 412.81" stroke="#46818F" stroke-width="0.7" stroke-dasharray="7 7"/>
<path d="M174.704 58.4675C130.853 190.365 318.16 152.071 215.258 470.81" stroke="#46818F" stroke-width="0.6" stroke-dasharray="7 7"/>
</svg>


        <h1 className="text-xl lg:font-bold px-4 md:px-8 lg:pb-4 lg:px-16 mt-9">
          Compliance Gate Platform
        </h1>
        <div className="text-lg lg:text-start md:text-4xl w-[80%] lg:text-5xl lg:font-bold text-black px-4 md:px-8">
          Find US, EU & UK Compliance Requirements for Your Products
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-between mt-2 px-4 md:px-8 gap-10">
          <div className="flex flex-col justify-center w-full lg:w-1/2">
            <ul className="lg:space-y-3 space-y-2 lg:mt-5">
              {list.map((item, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <FaCircleCheck size={24} className="mt-1 lg:block hidden" />
                  <FaCircleCheck size={16} className="lg:hidden block" />
                  <span className="lg:text-lg text-[10px] text-black">{item}</span>
                </li>
              ))}
            </ul>
            <button className="lg:ml-10 lg:w-[85%] lg:mt-[12%] mt-5 bg-[#3b6d77] text-white font-medium flex justify-center items-center flex-col py-3 rounded-md hover:bg-[#46818F] transition-all text-left">
              <h1 className="text-lg font-bold">Start 7-Days Free Trial</h1>
              <p className="text-sm font-light">No credit card required</p>
            </button>
          </div>
          <div className="w-full lg:w-[45%]">
            <div className="aspect-video w-full rounded-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/u2IEDVXPcc8?si=al4vIrKb3ymEuvfn"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#F9F9F9] py-10 lg:pt-20 ">
        <Highlights />
      </div>
    </div>
  );
}
