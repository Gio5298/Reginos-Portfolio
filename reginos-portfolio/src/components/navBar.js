import React from 'react';
import styled from 'styled-components';
import portLogo from './imgs/portLogo.png';

const MainDiv = styled.div`
display: flex;
justify-content: space-evenly;
height: 6rem;
`

const DivAnchor = styled.a`
margin-top: 1.5rem;
font-size: 1.5rem;
font-weight: 500;
color: white;
`

const DivImg = styled.img`
border: 1px solid blue;
height: 6rem;
width: 9rem;
`

function NavBar() {
  return ( 
    <MainDiv>
      <DivAnchor>Portfolio </DivAnchor>
      <DivAnchor>About Me </DivAnchor>
      <DivImg src={portLogo}/>
      <DivAnchor>Resume </DivAnchor>
      <DivAnchor>Contact </DivAnchor>
    </MainDiv>
  )
}

export default NavBar;
