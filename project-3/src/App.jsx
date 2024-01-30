import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggle = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <div>{isGameStarted ? <GamePlay /> : <StartGame func={toggle} />}</div>
  );
};

export default App;
