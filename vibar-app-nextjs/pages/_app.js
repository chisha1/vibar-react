import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import Background from '../src/components/Background/Background';

//CSS
import '../CSS/artist_page.css';
import '../CSS/Menu/menu.css';
//import '../CSS/style.css';
//import '../CSS/main.css';

class MyApp extends App {
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <Head>
                    <title>Vibar</title>
                    <link rel="icon" href="/Assets/Images/Logo/Website_Logo_outline.png"/>
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                    />
                </Head>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <Background />
                    <Component {...pageProps} />
                </ThemeProvider>
            </>
        );
    }
}

export default MyApp;
