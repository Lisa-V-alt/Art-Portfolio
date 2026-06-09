import { Grid, makeStyles, Typography } from "@material-ui/core";
import data from '../data.json';

const { about } = data;

const useStyles = makeStyles(theme => ({
  cont: {
    minHeight: `calc(100vh - ${theme.spacing(4)}px)`,
    alignSelf: 'center',
    justifySelf: 'center',
     paddingTop: theme.spacing(10),
  },
  headingRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  headingImage: {
    width: "250px",
    height: "250px",
    objectFit: "contain",
  },
  description: {
    maxWidth: "900px",
    margin: "0 auto",
    whiteSpace: "pre-line",
    textAlign: "left",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.cont}
    >
      <Grid item xs={12}>
        <div className={classes.headingRow}>
          <img
            src="/feature/mushroom.webp"
            alt="Mushroom illustration"
            className={classes.headingImage}
          />

          <Typography variant="h2" component="p" align="center">
            About Me
          </Typography>

          <img
            src="/feature/moth.webp"
            alt="Moth illustration"
            className={classes.headingImage}
             loading="lazy"
          />
        </div>

        <Typography
          variant="h5"
          gutterBottom
          component="p"
          className={classes.description}
        >
          {about.description}
        </Typography>
      </Grid>
    </Grid>
  );
}