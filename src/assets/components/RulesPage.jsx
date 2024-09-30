import React from "react";

export const RulesPage = () => {
  return (
    <div className="min-h-[100vh]">
      <header className=" flex items-center justify-between sm:px-10 px-5 mt-6">
        <div className="flex items-center justify-center flex-col">
          <span className="font-bold sm:text-5xl text-3xl">0</span>
          <p className="font-bold sm:text-base text-[10px] ">Total Score</p>
        </div>
        <div className="flex flex-col gap-3 items-end">
          <p className="text-red-600 font-bold mb-[-12px] sm:text-base text-[12px] visible">
            You have not selected any number
          </p>
          <div className="flex sm:gap-4 gap-2">
            <button className="sm:border sm:py-2 sm:px-4  px-3 py-0 border">
              1
            </button>
            <button className="sm:border sm:py-2 sm:px-4  px-3 py-0 border">
              2
            </button>
            <button className="sm:border sm:py-2 sm:px-4  px-3 py-0 border">
              3
            </button>
            <button className="sm:border sm:py-2 sm:px-4  px-3 py-0 border">
              4
            </button>
            <button className="sm:border sm:py-2 sm:px-4  px-3 py-0 border">
              5
            </button>
            <button className="sm:border sm:py-2 sm:px-4  px-3 py-0 border">
              6
            </button>
          </div>
          <div className="flex ">
            <div className="flex font-bold sm:text-base text-[12px]">
              Select Number
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-col items-center mt-10 gap-3">
        <img
          className="sm:max-w-28 max-w-20"
          src="images\cubes_gambling_n_02 1.svg"
          alt=""
        />
        <p className="font-bold">Click on Dice to roll</p>
        <button className="px-6 py-1 border-2 rounded-md font-bold">
          Reset Score
        </button>
        <button className="px-7 py-1 border-2 bg-black text-white rounded-md">
          Show rules
        </button>
      </div>
    </div>
  );
};
