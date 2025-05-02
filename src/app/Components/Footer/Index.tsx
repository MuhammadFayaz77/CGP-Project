import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LuSend } from "react-icons/lu";
import {
  FaFacebookF,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { CompanyArry, ProductArry, SupportArray } from "../Utail/footer";
import FooterCard from "./footerCard";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="bg-[#FFFFFF] border-t  border-gray-200 py-12 lg:pt-16  px-4 md:px-6 flex  justify-center">
      <div className="w-[90%]">
        <div className="grid grid-cols-1 xs:grid-cols-2   md:grid-cols-2 lg:grid-cols-5 gap-8 xs:gap-14">
          <div>
            <Link href="/" className="text-3xl font-bold text-[#46818F]">
              ? CGP
            </Link>
            <p className="text-[#0000008C] mt-4 mb-6">
              Join our newsletter for the latest updates and exclusive offers.
            </p>

            <div className=" flex items-center gap-4 mb-4">
              <span>
                <FaFacebookF size={20} color="#46818F" />
              </span>
              <span>
                <IoLogoInstagram size={20} color="#46818F" />
              </span>
              <span>
                <FaTwitter size={20} color="#46818F" />
              </span>
              <span>
                <FaLinkedin size={20} color="#46818F" />
              </span>
              <span>
                <FaYoutube size={20} color="#46818F" />
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-[#170F49] text-lg mb-4 ">Product</h3>
            <div className=" text-[#0000008C]">
              {ProductArry.map((items, index) => (
                <FooterCard key={index} heading={items.heading} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-[#170F49] text-lg mb-4 ">Company</h3>
            <div className=" text-[#0000008C]">
              {CompanyArry.map((items, index) => (
                <FooterCard key={index} heading={items.heading} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold  text-[#170F49] text-lg mb-4">Support</h3>
            <div className=" text-[#0000008C]">
              {SupportArray.map((items, index) => (
                <FooterCard key={index} heading={items.heading} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-[#170F49] text-lg mb-4 ">
              Contacts us
            </h3>

            <p className="text-[#0000008C]  flex items-center gap-2">
              <MdOutlineEmail />
              <a href="mailto:info@codebotx.com"> hello@codebotx.com</a>
            </p>
            <p className="text-[#0000008C] py-2 flex items-center gap-2">
              <FaPhone />
              <a href="tel:456-7890"> (123) 456-7890</a>
            </p>
            <p className="text-[#0000008C] flex items-start gap-2 ">
              <CiLocationOn size={30} />
              <a href="location"> 794 Mcallister St San Francisco, 94102</a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-gray-600 text-center md:text-left flex flex-col md:flex-row items-center md:items-start justify-between gap-4 md:gap-0">
          <p className="text-sm">Copyright © 2025 BRIX</p>
          <p className="text-sm  cursor-pointer hover:underline">
          All Rights Reserved  | <Link href={""} className="text-[#46818F]"> Terms and Conditions | Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
