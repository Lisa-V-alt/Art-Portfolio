import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { MuiThemeProvider, CssBaseline, useMediaQuery } from '@material-ui/core';
import { darkTheme, lightTheme } from '../src/theme';
import '../styles/global.css'; // Ensure this imports your global CSS

export default function MyApp({ Component, pageProps }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [theme, setTheme] = useState(prefersDarkMode ? darkTheme : lightTheme);
  const [overlayClass, setOverlayClass] = useState(prefersDarkMode ? 'dark-theme-overlay' : 'light-theme-overlay');

  useEffect(() => {
    setTheme(prefersDarkMode ? darkTheme : lightTheme);
    setOverlayClass(prefersDarkMode ? 'dark-theme-overlay' : 'light-theme-overlay');
  }, [prefersDarkMode]);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Lisa V</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {/* Gradient Overlay */}
        <div className={`gradient-overlay ${overlayClass}`}></div>
        <Component {...pageProps} setTheme={setTheme} />
      </MuiThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
