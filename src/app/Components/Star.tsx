"use client";
import React, { useState } from "react";

import { IoStarSharp } from "react-icons/io5";

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
            <IoStarSharp 
              size={20}
              color={currentRate <= rating ? "#FFD700" : " #D9D9D9 "}
              style={{ cursor: "pointer" }}
            />
          </label>
        );
      })}
    </div>
  );
}
