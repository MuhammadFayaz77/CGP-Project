"use client";
import React from "react";
import { SiVisa } from "react-icons/si";
import { BsPaypal } from "react-icons/bs";

const PaymentMethodsCard = () => {
  return (
    <div className="bg-[#F9F9F9] w-full flex flex-col px-4 md:px-10 justify-center items-center ">
      <h1 className="text-2xl md:text-4xl text-black font-bold text-center pb-10">
        Secure Payment Methods
      </h1>
      <div className="flex flex-col  sm:flex-row gap-6 sm:gap-4 max-w-lg w-full justify-center items-center">
        {/* PayPal Section */}
        <div className="w-full sm:w-auto rounded-sm relative border-[#A7A7A7] px-4 py-3  border-2 flex flex-col">
          <div className="flex absolute -top-4 left-3 bg-[#F9F9F9] px-2 py-1 items-center gap-2 text-base sm:text-lg font-medium">
            <BsPaypal color="#222357" size={20} className="sm:size-[25px]" />
            <span className="font-bold text-[#222357]">
              Pay<span className="text-[#2790C3]">Pal</span>
            </span>
          </div>
          <div className="flex gap-4 justify-start text-2xl text-gray-700">
            <SiVisa color="#222357" size={45} />
            <span className="flex relative  items-center">
              <h1 className=" left-2 translate-x-3 z-10 bg-[#EB001B] p-[12px] rounded-full  opacity-90"></h1>
              <h1 className=" left-8 z-20 bg-[#F79E1B] p-[12px] rounded-full "></h1>
            </span>
            <span className="flex relative  items-center">
              <h1 className=" left-2 translate-x-3 z-10 bg-[#EB001B] p-[12px] rounded-full "></h1>
              <h1 className=" left-8 z-20 bg-[#0099DF] p-[12px] rounded-full "></h1>
            </span>
            <span className="flex font-bold text-white  bg-[#006FCF]  items-center justify-center flex-col   ">
              <h1 className=" text-[10px] ">AMERICAN</h1>
              <h1 className=" text-[10px]  ">EXPRESS</h1>
            </span>
          </div>
        </div>
        {/* Stripe Section */}
        <div className="w-full sm:w-auto rounded-sm bg-[#1F1938] px-4 py-5 flex justify-center items-center text-center">
          <span className="text-white text-sm sm:text-base">
            Powered By
            <strong className="text-lg sm:text-xl font-bold"> Stripe</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodsCard;
