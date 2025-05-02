"use client"
import React, { useState } from 'react';

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menuName: string) => {
    setOpenMenu( prev => (prev === menuName ? null : menuName));
  };

  return (
    <div className="w-full flex justify-center pt-12 lg:pt-16  bg-[#F9F9F9]">
      <header className="relative flex items-center justify-between w-[80%] max-w-6xl px-6 py-3 bg-white rounded-full  border border-[#D0D5DD]">

      
        <h1 className="lg:text-4xl text-2xl font-bold text-[#46818F] lg:px-12">CGP</h1>

  
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium text-sm relative">
          <div className="relative">
            <button
              onClick={() => toggleMenu('products')}
              className="flex items-center space-x-1 hover:text-gray-900 focus:outline-none"
            >
              <span>Products</span>
             
              <svg className="w-4 h-4 mt-[2px] " fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openMenu === 'products' && (
              <div className="absolute top-full mt-2 w-40 bg-white shadow-lg rounded-md border py-2 z-50">
                <a  className="block px-4 py-2 hover:bg-gray-100">Product A</a>
                <a className="block px-4 py-2 hover:bg-gray-100">Product B</a>
                <a  className="block px-4 py-2 hover:bg-gray-100">Product C</a>
              </div>
            )}
          </div>

          <a  className="hover:text-gray-900">Pricing</a>
          <a  className="hover:text-gray-900">FAQs</a>

          <div className="relative">
            <button
              onClick={() => toggleMenu('resources')}
              className="flex items-center space-x-1 hover:text-gray-900 focus:outline-none"
            >
              <span>Resources</span>
              <svg className="w-4 h-4 mt-[2px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openMenu === 'resources' && (
              <div className="absolute top-full mt-2 w-40 bg-white shadow-lg rounded-md border py-2 z-50">
                <a className="block px-4 py-2 hover:bg-gray-100">Blog</a>
                <a  className="block px-4 py-2 hover:bg-gray-100">Guides</a>
              </div>
            )}
          </div>
        </nav>

        <div className='lg:px-12'><button className="ml-4 bg-[#3b6d77] 2 text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-[#46818F] transition-all">
          Get started
        </button></div>
      </header>
    </div>
  );
}
