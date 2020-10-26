import React from 'react';
import Menu from '../Menu/Menu'; //TODO: ranme Menu to Header??
import Footer from '../Footer/Footer';
import styled from 'styled-components'

const LayoutContainer = styled.div`
    margin: 0 10px 60px;
    /*background-image: linear-gradient(135deg, #00ffd9 43%, #00a1ff);*/
` //TODO: background image colour temporarily here

const Layout = ({ children }) => (
    <LayoutContainer>
        <Menu />
        {children}
        <Footer />
    </LayoutContainer>
);

export default Layout