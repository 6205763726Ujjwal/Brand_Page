import styled from "styled-components";
export const Button = styled.button`
  display: flex;
  width: 220px;
  padding: 6px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #000;
  color: #fff;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  border: 1px solid black;
  border: 1px solid transparent;
  transition: 0.3s ease-in;
  &:hover {
    background-color: #ffffff;
    color: #000000;
    cursor: pointer;
    border: 1px solid black;
    transition: 0.3s ease-in;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  border-radius: 5px;
  transition: 0.3s ease-in;
  cursor: pointer;
  &:hover {
    background-color: #000;
    color: #fff;
    cursor: pointer;
    border: 1px solid white;
    border-radius: 1px solid white;
    transition: 0.3s ease-in;
  }
`;
