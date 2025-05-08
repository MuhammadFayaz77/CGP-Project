"use client";


import { motion } from "framer-motion";
import jsPDF from "jspdf";
export function DocumentationCard({
  title,
  points,
  description,
  details,
}: {
  title: string;
  points?: string[];
  description: string;
  details?: string[];
}) {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Hello   PDF !", 10, 10);
    doc.textWithLink("Open Compliance Docs", 10, 20, {
      url: "/Images/pdf.pdf",
    });
    doc.save("document.pdf");
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "tween", stiffness: 300 }}
      className="flex flex-col items-center justify-center text-center z-10"
    >
      <div className=" shadow-[0px_-1px_7px_3px_#00000024] bg-[#FFFFFF] rounded p-4 w-full max-w-sm hover:shadow-sm transition-shadow duration-300 h-[330px] flex flex-col">
        <div className="flex flex-col text-start px-3 h-full">
          <h3 className="font-semibold text-md lg:text-xl text-[#1E1E1E]">
            {title}
          </h3>
          <p className="text-black text-sm">{description}</p>

          <div className="flex-grow ">
            {points && (
              <ul className="mt-2 space-y-1">
                {points.map((point, i) => (
                  <li
                    key={i}
                    className="lg:text-sm   justify-start items-center gap-2  lg:font-bold text-black flex"
                  >
                    +{" "}
                    <span className="text-[#4E4E4E] text-sm lg:text-base">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {details && (
              <ul className=" ">
                {details.map((detail, i) => (
                  <li key={i} className="text-[13px] text-[#4E4E4E]">
                    * {detail}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            onClick={generatePDF}
            className="w-full bg-[#46818F] p-2 rounded-lg mt-2"
          >
            Download (PDF)
          </button>
        </div>
      </div>
    </motion.div>
  );
}
