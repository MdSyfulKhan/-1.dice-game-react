import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, OutLineButton } from "../styled/Button";
import Rules from "./Rules";

export default function GamePlay() {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState();
  const [ShowRules, setShowRules] = useState(false);


  const generateRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  }

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number.");
      return;
    }
    setError("");

    const randomNumber = generateRandomNumber(1, 6);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber)
    }else{
      setScore((prev) => prev - 2)
    }
  }

  const resetScore = () => {
    setScore(0);
  }

  return (
    <MainContainer>
      <div className="top_wrap">
        <TotalScore score={score} />
        <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />

      <div className="btns">
        <Button onClick={resetScore}>Reset</Button>
        <OutLineButton onClick={() => setShowRules((prev => !prev))}>{ShowRules ? "Hide" : "Show" } Rules</OutLineButton>
      </div>
      {ShowRules && <Rules />}
    </MainContainer>
  )
}


const MainContainer = styled.main`
  max-width: 1180px;
  margin: 0 auto;
  .top_wrap{
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btns{
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }
`;