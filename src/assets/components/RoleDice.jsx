import React, { useState } from "react";
import { Rules } from "./Rules";

export const RoleDice = ({ currentDice, roleDice, setScore }) => {
  const reset = () => {
    setScore(0);
  };
  const [showRules, setShowRules] = useState(false);
  return (
    <div className="flex flex-col items-center mt-20 gap-3">
      <img
        onClick={roleDice}
        className="sm:max-w-28 max-w-20 cursor-pointer"
        src={`/images/dices/dice_${currentDice}.png`}
        alt=""
      />
      <p className="font-bold">Click on Dice to roll</p>
      <button
        onClick={reset}
        className="px-6 py-1 border-2 rounded-md font-bold transition duration-300 ease-in hover:bg-black hover:text-white hover:outline-white"
      >
        Reset Score
      </button>
      <button
        onClick={() => setShowRules((prev) => !prev)}
        className="px-7 py-1 border-2 bg-black text-white rounded-md transition duration-300 ease-in  hover:bg-white hover:text-black hover:outline"
      >
        {showRules ? "Hide" : "Show"} rules
      </button>
      {showRules && <Rules />}
    </div>
  );
};
