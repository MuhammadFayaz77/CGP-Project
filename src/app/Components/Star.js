"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";

export default function StarRate() {
  const [rating, setRating] = useState(null);

  return (
    <div className="flex  gap-1">
      {[...Array(5)].map((_, index) => {
        const currentRate = index + 1;
        return (
          <label key={currentRate} className="">
            <input
              type="radio"
              name="rate"
              value={currentRate}
              onClick={() => setRating(currentRate)}
              style={{ display: "none" }}
            />
            <FaStar
              size={20}
              color={currentRate <= rating ? "yellow" : " Black  "}
              style={{ cursor: "pointer" }}
            />
          </label>
        );
      })}
    </div>
  );
}
