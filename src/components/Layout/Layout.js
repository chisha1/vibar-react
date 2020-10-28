import React from 'react';
import Menu from '../Menu/Menu'; //TODO: ranme Menu to Header??
import Footer from '../Footer/Footer';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Background from '../Background/Background';

const LayoutContainer = styled.div`
    margin: 100px 0 60px;
` //TODO: background image colour temporarily here

const Layout = ({ children, renderFooter }) => (
    <LayoutContainer>
        <Menu />
        <Container fixed>
            {children}
        </Container>
        {
            //<Background/>
        }
        {renderFooter === true &&
            <Footer/>
        }
    </LayoutContainer>
);

export default Layout