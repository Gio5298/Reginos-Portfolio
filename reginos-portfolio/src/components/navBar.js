import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
height: 2.5rem;
text-align: center;
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
    </MainDiv>
  )
}

export default NavBar;
