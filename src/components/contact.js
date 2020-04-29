import React from "react";
import Styled from "styled-components";

//image import
import githublogo from "./imgs/githublogo.png";
import linkedinlogo from "./imgs/linkedinlogo.png";
import twitterlogo from "./imgs/twitterlogo.png"

const ContDiv = Styled.div`
display: flex;
justify-content: space-evenly;
margin: 0 10rem;

@media (max-width: 500px) {
  margin: 0 1rem;
  margin-top: 2rem;
} 
`

const ContAnch = Styled.a`

`

const ContImg = Styled.img`
height: 10rem;
width: 10rem;

@media (max-width: 500px) {
  width: 5rem;
  height: 5rem;
}
`

function Contact() {

  return (
    <ContDiv id="contact">
      <ContAnch href="https://www.linkedin.com/in/regino-a-parragil-a813b9198/" target="_blank">
        <ContImg src={linkedinlogo} />
      </ContAnch>
      <ContAnch href="https://github.com/Gio5298" target="_blank">
        <ContImg src={githublogo} />
      </ContAnch>
      <ContAnch href="https://twitter.com/282_0615" target="_blank">
        <ContImg src={twitterlogo} />
      </ContAnch>
    </ContDiv>
  )
}

export default Contact;