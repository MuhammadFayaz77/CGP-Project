"use client";
import Link from 'next/link'
import { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full flex justify-center pt-12 lg:pt-16 bg-[#F9F9F9]">
      <header className="relative flex items-center justify-between w-[80%] max-w-6xl px-6 py-3 bg-white rounded-full border border-[#D0D5DD]">
        <h1 className="lg:text-4xl text-2xl font-bold text-[#46818F] lg:px-12">
          C<span className="text-black">G</span>P
        </h1>
        <nav className="hidden md:flex justify-center items-center space-x-6 text-gray-700 font-medium text-sm">
          <form>
            <select 
              className="py-1 focus:outline-none   focus:border-transparent">
              <option value="about">Products</option>
              <option value="account">Account</option>
            </select>
          </form>
           <Link href="/" className="hover:text-gray-900 hover:border-b-2">Pricing</Link>
         <Link href="/Frequently" className="hover:text-gray-900 hover:border-b-2">FAQs</Link>
          <form>
            <select    
              className="py-1 focus:outline-none focus:ring-0 focus:border-transparent">
              <option value="about">Resources</option>
              <option value="account">Blogs</option>
            </select>
          </form>
        </nav>
        <div className="lg:px-12 hidden md:block">
          <button className="ml-4 bg-[#3b6d77] text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-[#46818F] transition-all">
            Get started
          </button>
        </div>
        <button 
          className="md:hidden p-2 text-black rounded-md focus:outline-none"
          onClick={toggleMenu}
        >
          <span>
            {isMenuOpen ? (
            <IoClose  />
            ) : (
              <CiMenuBurger />
            )}
          </span>
        </button>
        {isMenuOpen && (
          <div className="absolute top-full lg:left-[60%] right-0  text-black bg-[#F9F9F9] rounded-lg shadow-lg mt-2 py-4 z-50 md:hidden">
            <div className="flex flex-col  px-6">
              <form>
                <select 
                 
                   
                  className="w-full   focus:outline-none "
                >
                  <option value="about">Products</option>
                  <option value="account">Account</option>
                </select>
              </form>

               <Link href="/Frequently" className="hover:text-gray-900 py-2">Pricing</Link>
              <a className="hover:text-gray-900 py-2 ">FAQs</a>

              <form>
                <select 
                   
                  className="w-full   focus:outline-none  "
  >
                  <option value="about">Resources</option>
                  <option value="account">Blogs</option>
                </select>
              </form>
              <button className="w-full bg-[#3b6d77] text-white text-sm font-medium py-2 rounded-full hover:bg-[#46818F] transition-all mt-4">
                Get started
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}