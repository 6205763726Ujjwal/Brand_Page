import styled from "styled-components";
import { Button } from "../styled/Button";
import { OutlineButton } from "../styled/Button";
import { useState } from "react";
import Rules from "./Rules";
const RoleDice = ({ currentDice, DiceRole, setScore }) => {
  const [showButton, setShowButton] = useState(false);

  const resetScore = () => {
    setScore(0);
  };

  const toggleInfo = () => {
    setShowButton((prev) => !prev);
  };

  return (
    <DiceContainer>
      <div onClick={DiceRole} className="img">
        <img src={`/Image/Dice/dice_${currentDice}.png`} alt="Dice" />
      </div>
      <p>Click on Dice to roll</p>

      <div className="btn">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={toggleInfo}>
          {showButton ? "Hide" : "Show"} Rules
        </Button>
      </div>

      {showButton && <Rules />}
    </DiceContainer>
  );
};
export default RoleDice;
  
const DiceContainer = styled.div`
  padding: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: black;
    font-size: 20px;
    font-weight: 500;
  }
  .img {
    img {
      width: 210px;
      height: 210px;
    }
  }
  .btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin-top: 5px;
  }
`;
