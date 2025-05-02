import React from "react";

function PaymentMethods() {
  return (
    <div className="flex justify-center  items-center bg-white ">
      <div className="rounded-lg shadow-sm py-8 w-[400px] px-2">
        <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Secure Payment Methods
        </h2>
        
        <div className="flex justify-center items-center gap-4 px- py-3 border-2 border-gray-300 rounded-md">
          <span className="font-extrabold text-black">VISA</span>
          
          {/* Visa Logo Circles */}
          <div className="flex">
            <div className="rounded-full w-6 h-6 z-10 bg-[#EB001B]"></div>
            <div className="rounded-full w-6 h-6 -ml-3 z-20 bg-[#F79E1B] opacity-80"></div>
          </div>
          
          <div className="flex">
            <div className="rounded-full w-6 h-6 z-10 bg-[#EB001B]"></div>
            <div className="rounded-full w-6 h-6 -ml-3 z-20 bg-[#0099DF] opacity-80"></div>
          </div>
          
          {/* American Express Logo  k*/}
          <div className="flex flex-col items-center justify-center bg-blue-800 px-2 py-1 rounded">
            <span className="text-[10px] font-bold text-white tracking-wider">AMERICAN</span>
            <span className="text-[10px] font-bold text-white tracking-wider">EXPRESS</span>
          </div>
        </div>
        
        
      </div>
      <p className="text-xs bg-[#1F1938] py-6 text-gray-500 text-center ">
          Powered by <span className="font-bold">stripe</span>
        </p>
    </div>
  );
}

export default PaymentMethods;