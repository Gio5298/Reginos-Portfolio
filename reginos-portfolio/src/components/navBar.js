import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
display: flex;
justify-content: space-evenly;
height: 2.5rem;
padding: 0 auto;
border: 1px solid red
`

const DivAnchor = styled.a`
margin: 0;
font-size: 1.5rem;
`

function NavBar() {
  return (
    <MainDiv>
      <DivAnchor>Portfolio </DivAnchor>
      <DivAnchor>About Me </DivAnchor>
      <DivAnchor>Resume </DivAnchor>
      <DivAnchor>Contact </DivAnchor>

    </MainDiv>
  )
}

export default NavBar;
