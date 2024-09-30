import { useState } from "react";
import { NumberSelector } from "./NumberSelector";
import { RoleDice } from "./RoleDice";

export const MiddlePage = () => {
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();
  const [score, setScore] = useState(0);
  const [error, setError] = useState();

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    setError("");

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 1);
    }
    setSelectedNumber(undefined);
  };

  return (
    <div className="min-h-[100vh]">
      <header className=" flex items-center justify-between sm:px-10 px-5 mt-5">
        <div className="flex items-center justify-center flex-col">
          <span className="font-bold sm:text-5xl text-3xl">{score}</span>
          <p className="font-bold sm:text-base text-[10px] ">Total Score</p>
        </div>
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </header>
      <RoleDice
        currentDice={currentDice}
        roleDice={roleDice}
        setScore={setScore}
      />
    </div>
  );
};
