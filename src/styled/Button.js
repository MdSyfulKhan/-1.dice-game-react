import styled from "styled-components";

export const Button = styled.button`
  padding: 15px 50px;
  border-radius: 5px;
  background-color: black;
  color: white;
  border: 1px solid rgba(56, 55, 55, 0.3);
  min-width: 220px;
  font-size: 20px;
  cursor: pointer;
  transition: all .09s ease-in-out; 
  &:hover{
    background-color: white;
    color: black;
  }
`;

export const OutLineButton = styled(Button)`
  background-color: white;
  color: black;
  &:hover{
    background-color: black;
    color: white;
  }
`;