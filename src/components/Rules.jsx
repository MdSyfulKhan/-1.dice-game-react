import React from 'react'
import styled from 'styled-components'

export default function Rules() {
  return (
    <RulesContainer>
      <h2>How to play dice game.</h2>
      <div>
        <p>Select any number.</p>
        <p>Click on dice image.</p>
        <p>After click on dice if selected number is equal to dice number you will get same point as dice</p>
        <p>If you get wrong guess then 2 point will be dedcuted.</p>
      </div>
    </RulesContainer>
  )
}


const RulesContainer = styled.div`
  background-color: #eee;
  padding: 50px;
  padding-bottom: 30px;
  border-radius: 50px;
  
  .text p:last-child{
    margin-bottom: 0;
  }
`;
