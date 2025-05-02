"use client";
import { IoCopyOutline } from "react-icons/io5";
import Image from "next/image";
import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { button } from "@material-tailwind/react";
export default function AskQuestions() {
  const [textToCopy, setTextToCopy] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  );
  const [inputValue, setInputValue] = useState('Massage copy text here...');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div className="flex relative flex-col items-center justify-center px-4 pt-12 pb-6 bg-[#F9F9F9]   text-black  ">
           <div className="absolute  lg:block hidden  lg:top-[57%] lg:left-[77%]  top-[50%] ">
                <Image
                  src="/Images/line.svg"
                  alt="Picture of the author"
                  width={500}
                  height={500}
                  className="w-full lg:h-[400px] h-[100px] object-cover  "
                  />
              </div>
      <div className="text-center max-w-xl w-full">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold">
          Ask Questions to your personal compliance assistant
        </h1>
        <p className="text-sm sm:text-base text-gray-600  mt-3">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
      </div>

      <form className="lg:max-w-[60%] md:max-w-[90%] md:p-4 p-2 w-full mt-8 space-y-9  lg:p-12 bg-[#FFFFFF]  rounded-lg  shadow-[0px_-1px_7px_3px_#00000024]">
        <div className="relative lg:w-full">
          <label className="block mb-2 text-lg font-medium text-gray-900">
            Agency : <span className="text-[#46818F]">Status</span>
          </label>
          <select className=" text-[10px]  shadow-[0px_0px_2px_1px_#00000024]  appearance-none focus:outline-none border lg:text-lg rounded-lg text-[#9F9F9F] w-full p-5 pr-10">
            <option>Consumer product safety improvement act (CPSIA)</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </select>

          <div className="pointer-events-none absolute bottom-4  right-[5%] transform -translate-y-1/2 text-[#9F9F9F]">
            <GoChevronDown size={20} />
          </div>
        </div>

        <div className=" relative  ">
          <label className="block  text-lg font-medium text-gray-900">
            Quary
          </label>

          <textarea
            className=" focus:outline-none border shadow-[0px_0px_2px_1px_#00000024] border-gray-300 resize-none text-gray-900 text-sm rounded-lg block w-full p-2.5  "
            rows={5}
            placeholder="Write here...."
          ></textarea>
          <button className="absolute mt-2 right-[0%] p-2 px-7 text-white bg-[#46818F] rounded-md">
            Submit
          </button>
        </div>
        <div className="w-full">
          <label className="block mb-2 text-lg font-medium text-gray-900">
            Answer
          </label>

          <div className="flex border shadow-[0px_0px_2px_1px_#00000024]  border-gray-300  border-t-8 border-t-[#46818F] flex-col gap-2 bg-white  rounded-lg p-2.5">
            <textarea 
               value={inputValue}
               onChange={(e) => setInputValue(e.target.value)}
              onClick={handleCopy}
           
              className="  focus:outline-none resize-none text-gray-900 text-sm rounded-md w-full h-48 p-2"
              placeholder="Write here...."
            ></textarea>

            <div className="flex justify-end ">
              <button type="button" onClick={handleCopy} className=" gap-2  p-2 flex text-[#46818F] rounded-md">
                <IoCopyOutline size={20} />
                {copied ? 'Copied!' : ' text Copy'}
              </button>
            </div>
          </div>
        </div>
      </form>
      <p className="lg:max-w-[77%]  text-lg mt-16" >The Compliance Assistant allows you to ask questions and receive answers based on what’s written in the  actual product regulations. Think of it as having a conversation with the regulation text itself.</p>
    </div>
  );
}
