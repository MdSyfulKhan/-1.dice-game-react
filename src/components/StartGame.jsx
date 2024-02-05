import styled from "styled-components"
import PropTypes from 'prop-types';
import { Button } from "../styled/Button";

export default function StartGame({toggle}) {
  return (
    <Container>
      <div> <img src="./images/dices1.png" alt="" /></div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

StartGame.propTypes = {
  toggle: PropTypes.function
}


const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  .content{
    h1{
      font-size: 96px;
      margin: 0;
      margin-bottom: 20px;
    }
  }
`;

