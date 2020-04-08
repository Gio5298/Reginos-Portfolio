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
`

const ContImg = Styled.img`
height: 10rem;
width: 10rem;
`

function Contact() {

  return (
    <ContDiv id="contact">
      <a href="https://www.linkedin.com/in/regino-a-parragil-a813b9198/" target="_blank">
        <ContImg src={linkedinlogo} />
      </a>
      <a href="https://github.com/Gio5298" target="_blank">
        <ContImg src={githublogo} />
      </a>
      <a href="https://twitter.com/282_0615" target="_blank">
        <ContImg src={twitterlogo} />
      </a>
    </ContDiv>
  )
}

export default Contact;