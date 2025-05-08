"use client";

import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MarketingArray } from "../Components/Utail/marketing";


import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import MarketingCard from "./MarketingCard";


function Marketing() {
  const sliderRef = useRef<Slider>(null);

  const Slidersettings = {
   
    infinite: true,
    
    // customPaging: () => (
    //   <div className="w-3 h-3 bg-gray-400 rounded-full hover:bg-[#46818F] transition-all duration-300" />
    // ),
    
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    autoplay: true,
    slidesToShow: 1.9,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 506, // mobile and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex  justify-center bg-[#F9F9F9] o">
        <div className="slider-container w-full">
          <Slider ref={sliderRef} {...Slidersettings}>
            {MarketingArray.map((item, index) => (
              <div key={index} className="px-2">
                <MarketingCard
                  image={item.image}
                  name={item.name}
                  comment={item.comment}
                />
              </div>
            ))}
          </Slider>
        </div>

      </div>

       
      <div className="flex justify-center gap-6 pt-12 bg-[#F9F9F9]">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className=" bg-[#46818F] text-white p-2 rounded-full transition-colors duration-200"
        >
          <IoIosArrowBack size={20} />
        </button>
        
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className=" bg-[#46818F]   text-white p-2 rounded-full transition-colors duration-200"
        >
          <IoIosArrowForward size={20} />
        </button>
      </div>
    </>
  );
}

export default Marketing;
