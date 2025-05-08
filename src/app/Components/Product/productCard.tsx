"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
interface ProductCardProps {
  bgImage: string;
  button: string;
  label: string;
  style?: string;
}
const ProductCard: React.FC<ProductCardProps> = ({
  bgImage,
  button,
  label,
  style,
}) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="relative  bg-[#FFFFFF] rounded shadow-md p-4 flex flex-col items-center w-full max-w-[90%] sm:max-w-[180px] mx-auto transition-all duration-300">
      <div
        className={` ${style} absolute left-0  rounded-tr-sm bg-blue-600 text-white text-xs font-semibold px-3 py-0.5 `}
      >
        {label}
      </div>
      <div
        className="absolute  right-2 cursor-pointer"
        onClick={() => setLiked(!liked)}
      >
        {liked ? (
          <IoHeartSharp className="text-[#46818F] text-2xl" />
        ) : (
          <IoHeartOutline className="text-[#46818F] text-2xl" />
        )}
      </div>
      <div className="my-2  mx-auto">
        <Image
          src={bgImage}
          alt="Product Image"
          width={150}
          height={150}
          className="object-contain w-full h-full"
        />
      </div>
      <button className="mt-auto border border-blue-500 text-blue-600 px-6 py-1 rounded-full text-sm font-medium hover:bg-blue-50 w-[100%] mx-auto block">
        {button}
      </button>
    </div>
  );
};

export default ProductCard;
