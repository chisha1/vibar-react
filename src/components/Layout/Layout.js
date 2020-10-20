import React from 'react';
//import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import styled from 'styled-components'

const LayoutContainer = styled.div`
    padding: 95px 10px 60px;
    background-image: linear-gradient(135deg, #00ffd9 43%, #00a1ff);
`

const Layout = ({ children }) => (
    <LayoutContainer>
        <Menu />
        {children}
        <Footer />
    </LayoutContainer>
);

export default Layout