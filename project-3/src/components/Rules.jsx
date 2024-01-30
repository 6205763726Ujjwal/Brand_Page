import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h1>How to play dice game</h1>
      <div>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice if you get wrong guess then 2 point will
          be dedcuted.
        </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;
const RulesContainer = styled.div`
  margin: 130px 150px 70px 150px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #fbf1f1;
  padding: 10px;

  h1 {
    color: #000;
    font-size: 24px;
    font-weight: 700;
  }
  p {
    color: #000;
    font-size: 18px;
    font-weight: 400;
  }
`;
