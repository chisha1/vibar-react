import React from 'react';
import styled from 'styled-components';

//#region CSS
const WebsiteBackground = styled.div`
    background-image: linear-gradient(135deg, #00ffd9 43%, #00a1ff);
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: -1;
`
//#endregion

const Background = () => (
    <WebsiteBackground></WebsiteBackground>
)

export default Background;