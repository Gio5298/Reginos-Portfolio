import React from 'react';
import Styled from 'styled-components';

const MainDiv = Styled.div`
display: flex;
margin-top: 8rem;
//border: 1px solid red
`

const TopCont = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: 0 auto;
//border: 1px dashed blue;
`

const NameHeader = Styled.h2`
border-bottom: 1px solid white;
border-width: medium;
padding: 1rem;
font-size: 5rem;
color: snow;
width: 60rem;
text-align: center;
`

const NamePara = Styled.p`
color: snow;
font-size: 2rem;
text-align: center;
`

const MidCont = Styled.div`
border: 1px solid red;
`

function MainCont() {
  return (
    <MainDiv>
      <TopCont id="home"> 
        <NameHeader>Regino A. Parragil</NameHeader>
        <NamePara>Full Stack Web Developer</NamePara>
      </TopCont>
      <MidCont>

      </MidCont>
    </MainDiv>
  )
}

export default MainCont;