import React from "react";
import Styled from "styled-components";

const ProjDiv = Styled.div`
display: flex;
text-align: center;
`

const ProjImg = Styled.img`
width: 50rem;
height: 25rem;
border-radius: 5px;
`
const ProjText = Styled.div`

`

const ProjHeader = Styled.h2`
color: snow;
font-size: 2rem;
`

function Projects() {
  return (
    <ProjDiv>
      <ProjImg src={CitricsImg} />
      <ProjText>
        <ProjHeader>Projects</ProjHeader>
        <p>Lorem ipsum</p>
      </ProjText>
    </ProjDiv>
  )
}

export default Projects;