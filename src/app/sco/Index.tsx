"use client";
import Slider from "react-slick";
import { SetStateAction, useRef, useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { ScoArry } from "../Components/Utail/scoArry";
import ScoCard from "./scoCard";
function Sco() {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);
  const Slidersettings = {
    dots: true,
    beforeChange: (next: SetStateAction<number>) => setActiveSlide(next),
    customPaging: (index: number) => (
      <div
        className={`w-3 h-3    rounded-full transition-all duration-350 ${
          index === activeSlide ? "bg-[#46818F]  w-6" : "bg-gray-400 "
        }`}
      />
    ),
    infinite: true,
    speed: 500,

    autoplaySpeed: 2000,
    cssEase: "linear",
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      // {
      //   breakpoint: 506, // mobile and below
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };

  return (
    <>
      <div className="flex  justify-center items-center bg-[#FFFFFF] rounded-xl overflow-hidden pb-12">
        <div className="slider-container w-full   ">
          <Slider ref={sliderRef} {...Slidersettings}>
            {ScoArry.map((item, index) => (
              <div key={index} className="px-2 ">
                <ScoCard
                  image={item.Image}
                  description={item.description}
                  list={item.list}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Sco;
