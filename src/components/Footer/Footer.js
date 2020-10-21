import React from 'react';
import styled from 'styled-components'

const FooterLogo = styled.img`
    height: 43px;
    margin: 20px;
`
const FooterContainer = styled.footer`
    padding-bottom: 160px;
    background-color: #1b1b1be3;
    margin: 20px 0 -25px;
    bottom: 0;
    color: white;
    text-align: center;
`

const Footer = () => (
    <FooterContainer>
        <FooterLogo src="/Assets/Images/Logo/Website_Logo_outline_empty.png" />
        <p>&copy; {`${new Date().getFullYear()}`} - Vibar Music</p> <br />
        <p>Web Application Created By Chisha</p>
    </FooterContainer>
);

export default Footer;
