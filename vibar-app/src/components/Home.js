import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Layout from './Layout/Layout';
import { getAllUsers, getAllArtists } from '../services/ArtistService';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default function Index() {
    const [pageState, setPageState] = useState([]);

    useEffect(() => {
        getAllUsers().then(tasks => {
            console.log(tasks);
            setPageState(tasks);
        });
    }, []); //passing an empty array to useEffect stops the setState loop

    useEffect(() => {
        getAllArtists().then(tasks => {
            console.log(tasks);
            //setPageState(tasks);
        });
    }, []);

    return (
        <Layout renderFooter={true}>
            <Container maxWidth="sm">
                <Title>Home Page Title with styled-components</Title>
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom
                    >
                        Next.js v4-beta example. {pageState.toLocaleString()}
                    </Typography>
                    <Link to="/about" color="secondary">
                        Go to the about page
                    </Link>
                </Box>
            </Container>
        </Layout>
    );
}