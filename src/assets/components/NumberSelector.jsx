import React, { useState } from "react";

export const NumberSelector = ({
  selectedNumber,
  setSelectedNumber,
  error,
  setError,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  return (
    <div className="flex flex-col items-end">
      <p className="text-red-600 font-bold  sm:text-base text-[12px] visible">
        {error}
      </p>
      <div className="flex sm:gap-4 gap-2">
        {arrNumber.map((value, i) => {
          return (
            <button
              key={i}
              onClick={() => {
                setSelectedNumber(value);
                setError("");
              }}
              className={`sm:border sm:py-2 sm:px-4  px-3 py-0 border ${
                selectedNumber === value ? " bg-black text-white" : ""
              }`}
            >
              {value}
            </button>
          );
        })}
      </div>
      <div className="flex ">
        <div className="flex font-bold sm:text-base text-[12px] gap-[-12px]">
          Select Number
        </div>
      </div>
    </div>
  );
};
