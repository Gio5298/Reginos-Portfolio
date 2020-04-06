import React from 'react';
import styled from 'styled-components';
import portLogo from './imgs/portLogo.png';

const MainDiv = styled.div`
display: flex;
justify-content: space-evenly;
height: 6rem;
`

const NavAnchor = styled.a`
margin-top: 1.5rem;
font-size: 1.9rem;
font-weight: 500;
color: white;
text-decoration: none;
`

const NavAnchorImg = styled.a`

`

const DivImg = styled.img`
height: 6rem;
width: 6rem;
`

function NavBar() {
  return ( 
    <MainDiv>
      <NavAnchor href="#aboutMe">About Me </NavAnchor>
      <NavAnchor href="projects">Projects </NavAnchor>
      <NavAnchorImg href="#home"><DivImg src={portLogo}/></NavAnchorImg>
      <NavAnchor href="#resume">Resume </NavAnchor>
      <NavAnchor href="#contact">Contact </NavAnchor>
    </MainDiv>
  )
}

export default NavBar;
