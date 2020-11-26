import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import Link from '../src/Link';
import Layout from '../src/components/Layout/Layout';


export default function About() {
    return (
    <Layout>
        <Container maxWidth="sm">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Next.js v4-beta example
                </Typography>
                <Link href="/">Go to the main page</Link>
            </Box>
        </Container>
    </Layout>
  );
}