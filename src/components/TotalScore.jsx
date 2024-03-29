import styled from "styled-components"

export default function TotalScore({score}) {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  )
}

const ScoreContainer = styled.div`
width: 200px;
text-align: center;
  h1{
    font-size: 100px;
    margin: 0;
  }
  p {
    font-size: 24px;
    font-weight: 500;
    margin: 0;
  }
`;
