"use client"
import React from 'react'
import Image from 'next/image'

export default function ResearchTool() {
  return (
    <div className="bg-[#F9F9F9] text-black flex flex-col lg:flex-row lg:pt-4">
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-10 lg:relative  ">
        <h1 className="text-4xl lg:text-4xl lg:text-start text-center font-bold lg:px-12">Competitor SEO/PPC Research Tool</h1>
        <p className="text-sm py-8 text-center lg:px-12 lg:text-start">
          If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text 
        </p>
        <div className="flex flex-col md:flex-row gap-4 w-full  lg:absolute lg:left-[13.1%]  bottom-[20%] ">
          <input
            type="url"
            placeholder="Your website URL"
            className="rounded-sm border text-sm   border-[#888888] px-4 py-2 focus:outline-none w-full"
          />
          <input
            type="email"
            id="username"
            name="username"
            placeholder="Email Address"
            className="rounded border  text-sm  border-[#888888] px-4 py-2 focus:outline-none w-full"
          />
          <button className="rounded-lg bg-black text-sm text-white px-3 py-2 hover:bg-gray-800 transition w-[50%] o">
          Search Now
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center w-full lg:w-1/2 p-2 ">
        <Image
          src="/Images/image.svg"
          width={700}
          height={700}
          alt="Illustration"
          className="max-w-full h-auto hidden lg:block"
        />
      </div>
    </div>
  )
}
