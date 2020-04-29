import React from 'react';
import styled from 'styled-components';

//image imports
import portLogo from './imgs/portLogo.png';

const NavDiv = styled.div`
display: flex;
justify-content: space-evenly;
height: 6rem;
position: fixed;
top: 0;
width: 100%;
z-index: 99999;
`

const NavAnchor = styled.a`
margin-top: 1.5rem;
font-size: 1.9rem;
font-weight: 500;
color: white;
text-decoration: none;

@media (max-width: 500px) {
  font-size: .9rem;
} 
`

const NavAnchorImg = styled.a`

`

const DivImg = styled.img`
height: 6rem;
width: 6rem;

@media (max-width: 500px) {
  height: 2rem;
  width: 2rem;
  padding-top: .8rem;
}
`

function NavBar() {
  return ( 
    <NavDiv id="navBar">
      <NavAnchor href="#aboutMe">About Me </NavAnchor>
      <NavAnchor href="#projects">Projects </NavAnchor>
      <NavAnchorImg href="#home"><DivImg src={portLogo}/></NavAnchorImg>
      <NavAnchor href="https://docs.google.com/document/d/1mnzzeTqtk8ApjNx6LiiErkkErG11ojR1SSqePeUWQ68/edit?usp=sharing" target="_blank">Resume </NavAnchor>
      <NavAnchor href="#contact">Contact </NavAnchor>
    </NavDiv>
  )
}

export default NavBar;
