import React from "react";
import Styled from "styled-components";

const FootDiv = Styled.div`
margin: auto;
margin-top: 50px;
color: white;
`

function Footer() {
    return (
        <FootDiv>
            <p>&copy; 2020 Regino A. Parragil</p>
        </FootDiv>
    )
}

export default Footer;