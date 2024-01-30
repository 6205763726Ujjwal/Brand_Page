import styled from "styled-components";

const NumberSelector = ({ setError, error, number, setNumber }) => {
  const array = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setNumber(value);
    setError("");
  };

  return (
    <>
      <NumberSelectorContainer>
        <p className="error"> {error}</p>
        <div className="flex">
          {array.map((value, index) => (
            <Box
              IsSelected={value === number}
              onClick={() => numberSelectorHandler(value)}
              key={index}
            >
              {value}
            </Box>
          ))}
        </div>
        <div className="align">
          <p>Select Number</p>
        </div>
      </NumberSelectorContainer>
    </>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  .error {
    color: red;
  }
  .flex {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .align {
    display: flex;
    justify-content: flex-end;
  }
  p {
    font-size: 18px;
    font-weight: 600;
  }
`;

const Box = styled.div`
  border: 1px solid grey;
  width: 36px;
  height: 36px;
  /* padding: 4px 5px; */
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: ${(props) => (props.IsSelected ? "black" : "white")};
  color: ${(props) => (props.IsSelected ? "white" : "black")};
`;
