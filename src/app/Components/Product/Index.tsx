"use client";
import React from 'react';
import ProductCard from './productCard';
import { productArry } from '../Utail/products';
export default function Product() {
  return (
    <div className="bg-[#2E2E2E]  pt-24 flex justify-center items-center flex-col px-4">
      <div className="text-center mb-8">
        <h1 className="text-xl sm:text-2xl md:text-4xl text-white font-semibold">
          Product/Module Examples
        </h1>
        <p className="text-sm sm:text-base text-[#FFFFFF8F] max-w-[63%] lg:mb-12 mx-auto mt-2">
          Below are examples of product categories and materials the platform covers to some extent. Note that both US and EU requirements are covered to some extent unless otherwise indicated.
        </p>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 w-full sm:w-auto lg:w-[90%] mx-auto ">
        {productArry.map((item, index) => (
          <ProductCard
            key={index}
            bgImage={item.bgImage}
            button={item.button}
            label={item.label}
            style={item.style}
          />
        ))}
      </div>
    </div>
  );
}
