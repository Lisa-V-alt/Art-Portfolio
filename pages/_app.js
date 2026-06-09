import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { darkTheme, lightTheme } from '../src/theme';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState('dark');

  const toggleTheme = () => {
    setMode(previousMode => previousMode === 'light' ? 'dark' : 'light');
  };

  const theme = mode === 'dark' ? darkTheme : lightTheme;

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>mothrat</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className={mode === 'dark' ? 'dark-mode' : 'light-mode'}>
          <Component
            {...pageProps}
            setTheme={toggleTheme}
            mode={mode}
          />
        </div>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};