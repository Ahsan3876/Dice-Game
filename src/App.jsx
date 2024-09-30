import { useState } from "react";
import "./App.css";
import { StartGame } from "./assets/components/StartGame";
import { MiddlePage } from "./assets/components/MiddlePage";
import { RulesPage } from "./assets/components/RulesPage";

function App() {
  const [isGameStart, setIsGameStart] = useState(false);

  const toggleFunction = () => {
    setIsGameStart(() => !isGameStart);
  };
  return (
    <>{isGameStart ? <MiddlePage /> : <StartGame toggle={toggleFunction} />}</>
  );
}

export default App;
