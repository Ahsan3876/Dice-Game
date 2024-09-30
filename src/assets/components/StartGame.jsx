import React from "react";

export const StartGame = ({ toggle }) => {
  return (
    <div className="bg-white flex flex-row gap-8 min-h-[100vh] m-0 px-5 py-4">
      <div className="mt-16">
        <img src="/images/dices 1.svg" alt="" />
      </div>
      <div className=" flex items-center justify-center w-[600px]">
        <div className="flex flex-col items-end">
          <h1 className="text-7xl font-bold flex items-center">DICE GAME</h1>
          <div className="flex flex-col items-end">
            <button
              onClick={toggle}
              className="bg-black text-white py-2 px-10 mt-5 items-end ml-1 transition duration-300 ease-in  hover:bg-white hover:text-black hover:outline  "
            >
              Play Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
