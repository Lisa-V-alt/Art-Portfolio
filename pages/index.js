import React, { useCallback } from 'react';
import { AppBar, Container, IconButton, makeStyles, Toolbar, Typography, useScrollTrigger, useTheme } from '@material-ui/core';
import Landing from '../src/Landing';
import Skills from '../src/Skills';
import Projects from '../src/Projects';
import Experience from '../src/Experience';
import About from '../src/About';
import data from '../data.json';
import { darkTheme, lightTheme } from '../src/theme';
import { Brightness4, Brightness7 } from '@material-ui/icons';

const { name, projects } = data;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    boxShadow: "none",
  }
}));

export default function Index({ setTheme }) {
  const classes = useStyles();

  const trigger = useScrollTrigger({ disableHysteresis: true });

  const theme = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(theme => theme.palette.type === 'dark' ? lightTheme : darkTheme);
  }, [setTheme]);

  return (
    <div className={classes.root}>
      <AppBar color={!trigger ? "transparent" : "inherit"} className={classes.appBar} position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.root}>
            { name }
          </Typography>
          <IconButton edge="end" color="inherit" onClick={toggleTheme}>
            {theme.palette.type === "dark" ? <Brightness7/> : <Brightness4/>}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.toolbar} />
      <Container>
  <Landing />
  <Skills />
  <Projects data={projects}/>
  <About/>
  <Experience/>
<div
  style={{
    textAlign: "center",
    marginTop: "4rem",
    marginBottom: "2rem"
  }}
>
  <Typography
    variant="body2"
    style={{
      display: "inline-block",
      backgroundColor: "#263d7cb2",
      color: "#ffd76b",
      padding: "0.4rem 1rem",
      borderRadius: "8px",
      fontWeight: 600
    }}
  >
    Designed, illustrated & coded by me! (mothrat) ✨🦋🐀
  </Typography>
</div>
</Container>
    </div>
  );
}
