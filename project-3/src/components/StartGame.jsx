import { useState } from "react";
import styled from "styled-components";
import GamePlay from "./GamePlay";
import { Button } from "../styled/Button";

const StartGame = ({ func }) => {
  const [isStartGame, setIsStartGame] = useState(false);

  function gameplay({ func }) {
    setIsStartGame((prev) => !prev);
  }

  return (
    <>
      <Container>
        <div>
          <img src="/Image/dices.png" alt="dice" />
        </div>
        <div className="dice">
          <h1>DICE GAME</h1>
          <div className="btn">
            <Button onClick={func}>Play Now</Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;

  .dice {
    h1 {
      color: #000;
      font-family: "Poppins", sans-serif;
      font-size: 46px;
      font-weight: 700;
    }
  }
  .btn {
    display: flex;
    justify-content: flex-end;
  }
`;
