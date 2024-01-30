import { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";

const GamePlay = () => {
  const [number, setNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
    // console.log(Math.floor(Math.random() * (max - min) + min));
  };

  const DiceRole = () => {
    if (!number) {
      setError("You have not select any Number");
      return; // Guard Clause
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (number === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setNumber(undefined);
  };

  return (
    <Main>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          setError={setError}
          error={error}
          number={number}
          setNumber={setNumber}
        />
      </div>
      <RoleDice
        currentDice={currentDice}
        DiceRole={DiceRole}
        setScore={setScore}
      />
    </Main>
  );
};

export default GamePlay;

const Main = styled.section`
  margin-top: 64px;
  .top_section {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 270px;
  }
`;
