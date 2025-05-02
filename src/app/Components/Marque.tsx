import React from "react";
import Marquee from "react-fast-marquee";

const items = [
  "Instant replies and 24/7 availability",
  "Lightning-fast customer support",
  "Secure and reliable service",
];

const Marque = () => (
  <Marquee style={{ backgroundColor: "#46818F"  }}>
    {items.map((text, index) => (
      <div
        key={index}
        className="flex justify-center items-center gap-12 p-4 text-white"
      >
        <span>
          <svg
            width="30"
            height="35"
            viewBox="0 0 44 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.0814 0.849609L27.962 16.7418L43.8541 22.6224L27.962 28.503L22.0814 44.3951L16.2007 28.503L0.308594 22.6224L16.2007 16.7418L22.0814 0.849609Z"
              fill="white"
            />
          </svg>
        </span>
        <h1>{text}</h1>
      </div>
    ))}
  </Marquee>
);

export default Marque;
