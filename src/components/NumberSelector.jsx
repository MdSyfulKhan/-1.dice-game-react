import styled from "styled-components"

export default function NumberSelector({ selectedNumber, setSelectedNumber, error }) {

  const NumberArray = [1, 2, 3, 4, 5, 6];

  return (
    <NumberSelectorContainer>
      {!selectedNumber ? <p className="error">{error}</p> : ""}

      <div className="flex">
        {
          NumberArray.map((value, index) => (
            <Box
              key={index}
              onClick={() => setSelectedNumber(value)}
              isSelected={value === selectedNumber}
            >{value}</Box>
          ))
        }
      </div>
      {
        selectedNumber ? <p className="selected">Selected Number is {selectedNumber}</p> : <p>Select Number</p>
      }
    </NumberSelectorContainer>
  )
}

const NumberSelectorContainer = styled.div`
  .flex{
    display: flex;
    gap: 24px;
  }
  p{
    font-size: 24px;
    font-weight: 700;
    text-align: end;
    margin: 10px 0;
  }
  .error{
    color: red ;
    font-size: 16px;
  }
  .selected{
    color: green ;
  }
`;

const Box = styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
background-color: ${(props) => (props.isSelected ? "black" : "white")} ;
color: ${(props) => (!props.isSelected ? "black" : "white")} ;
`;
