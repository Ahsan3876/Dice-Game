import React from "react";

export const Rules = () => {
  return (
    <div className="px-6 bg-slate-200 max-w-[700px] py-5 rounded-xl mt-5">
      <h1 className="sm:text-lg text-[14px] font-bold">
        How to play a dice game
      </h1>
      <div className="mt-3 sm:text-xs text-[10px]">
        <ol type="number">
          <li>Select any number.</li>
          <li>Click on dice image.</li>
          <li>
            after click on dice if selected number is equal to dice number you
            will get same point as dice.
          </li>
          <li>if you get wrong guess then 2 point will be deducted.</li>
        </ol>
      </div>
    </div>
  );
};
