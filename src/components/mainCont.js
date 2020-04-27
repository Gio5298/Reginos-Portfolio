import React from 'react';
import Styled from 'styled-components';

//comp imports
import AboutMe from './aboutMe';
import Projects from './projects';
import Contact from './contact';
import Footer from './footer';

const MainDiv = Styled.div`
display: flex;
flex-direction: column;
margin-top: 8rem;

@media (max-width: 500px) {
  margin-top: .8rem;
} 
`

const TopCont = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: 0 auto;
margin-bottom: 5rem;
`

const NameHeader = Styled.h1`
border-bottom: 1px solid white;
border-width: medium;
padding: 1rem;
font-size: 5rem;
color: snow;
width: 60rem;
text-align: center;

@media (max-width: 500px) {
  padding: .1rem;
  font-size: 1rem;
  width: 15rem;
} 
`

const NamePara = Styled.p`
color: snow;
font-size: 2rem;
text-align: center;

@media (max-width: 500px) {
  font-size: .9rem;
} 
`

function MainCont() {
  return (
    <MainDiv>
      <TopCont id="home">
        <NameHeader>Regino A. Parragil</NameHeader>
        <NamePara>Full Stack Web Developer</NamePara>
      </TopCont>
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </MainDiv>
  )
}

export default MainCont;