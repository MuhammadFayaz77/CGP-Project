"use client";
import React from "react";
import { FaBoxes,  FaGavel } from "react-icons/fa";
import { InfoCard } from "./infoCard";
import { FaFileInvoiceDollar } from "react-icons/fa";

const cardData = [
  {
    icon: <FaBoxes size={200} className="text-[#2E7A83]" />,
    title: "Sell new products and  access new markets",
    description:
      "The compliance process is repeated for each product and market you sell in",
  },
  {
    icon: <FaFileInvoiceDollar size={200} className="text-red-500" />,
    title: "Reduce the risk of Amazon removals",
    description:
      "Amazon frequently checks certificates, labels, and test reports",
  },
  {
    icon: <FaGavel size={200} className="text-black" />,
    title: "Reduce the risk of recalls and fines",
    description:
      "Certificates, labels, and test reports checked by the customs or market surveillance authorities",
  },
];

export default function ComplianceInfo() {
  return (
    <div className="relative bg-[#F9F9F9]  overflow-hidden py-16 px-4 text-center ">
      <svg
        className="absolute   lg:top-[-10%] lg:left-[-1%]  hidden lg:block  "
        width="290"
        height="430"
        viewBox="0 0 247 471"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.7036 0.467545C-36.1467 132.365 151.16 94.0712 48.2585 412.81"
          stroke="#46818F"
          stroke-width="0.7"
          stroke-dasharray="7 7"
        />
        <path
          d="M174.704 58.4675C130.853 190.365 318.16 152.071 215.258 470.81"
          stroke="#46818F"
          stroke-width="0.6"
          stroke-dasharray="7 7"
        />
      </svg>

      <h2 className="text-2xl md:text-3xl font-semibold text-[#2E2E2E] mb-4">
        Why does product compliance matter?
      </h2>
      <p className="text-sm md:text-base max-w-3xl mx-auto text-[#3D3D3D]">
        Failing to ensure compliance{" "}
        <span className="text-[#46818F] font-semibold">
          before you start selling
        </span>{" "}
        a product can result in fines, recalls, Amazon product removals, and
        missed sales opportunities.
      </p>

      <svg
        width="189"
        className="absolute  lg:top-[65%] lg:left-[85%] "
        height="337"
        viewBox="0 0 214 337"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.26"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M150.026 1.67336C239.509 -5.18728 345.715 18.3658 370.757 104.547C394.635 186.724 306.117 245.681 234.571 292.632C176.784 330.552 104.384 356.678 48.4833 316.028C-7.36487 275.417 -7.64771 197.641 13.5779 131.932C34.9467 65.7784 80.711 6.98777 150.026 1.67336Z"
          fill="#46818F"
        />
      </svg>

      <div className="mt-12 grid grid-cols-1  lg:pb-16  sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto ">
        {cardData.map((card, index) => (
          <InfoCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}
