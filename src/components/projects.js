import React from "react";
import Styled from "styled-components";

//img import
import citricsImg from './imgs/citricsImg.png'

const ProjDiv = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: 0 75px 0 100px;
margin-bottom: 15rem;

@media (max-width: 500px) {
  flex-direction: column;
  margin: auto;
}
`

const ProjImg = Styled.img`
width: 750px;
height: 400px;
border-radius: 10px;

@media (max-width: 500px) {
  width: 350px;
  height: 200px;
  margin: 0 auto;
}
`

const ProjTop = Styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;

@media (max-width: 500px) {
  flex-direction: column;
}
`

const ProjCont = Styled.div`
display: flex;
flex-direction: column;
margin: 0 50px 0 100px;
width: 35%;

@media (max-width: 500px) {
  margin: 0 auto;
  width: 100%;
  text-align: center;
} 
`

const ProjWrap = Styled.div`
display: flex;
margin: 0 50px 0 100px;
width: 35%;

@media (max-width: 500px) {
  margin: 0 auto;
  width: 100%;
  text-align: center;
} 
`

const ProjHeader = Styled.h2`
color: snow;
font-size: 3rem;
`

const ProjAnch = Styled.a`
color: snow;
`

const ProjPara = Styled.p`
color: snow;
font-size: 1.6rem;
`

function Projects() {
  return (
    <ProjDiv id="projects">
      <ProjTop>
        <ProjCont>
          <ProjHeader>Projects</ProjHeader>
          <ProjPara>The main project that I had the pleasure of working on was <ProjAnch href="https://v2.citrics.io/" target="_blank">Citrics</ProjAnch> which is a search engine that streamlines city data such as the housing market, job industry, and community statistics through an intuitive and easy interface.</ProjPara>
        </ProjCont>
        
          <ProjImg src={citricsImg} />
        
        <ProjWrap>
          <ProjPara>If you'd like to see more, click <ProjAnch href="https://github.com/Gio5298" target="_blank">here</ProjAnch></ProjPara>
        </ProjWrap>
      </ProjTop>
    </ProjDiv>
  )
}

export default Projects;