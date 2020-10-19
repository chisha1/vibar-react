import React from 'react';
//import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import styled from 'styled-components'

const LayoutContainer = styled.div`
  margin: 3px, 4px;
`

const Layout = ({ children }) => (
    <LayoutContainer>
        <Menu />
        {children}
        <Footer />
    </LayoutContainer>
);

export default Layout