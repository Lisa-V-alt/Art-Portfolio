import {
  Card,
  CardActionArea,
  CardMedia,
  Fade,
  Grid,
  makeStyles,
  Typography,
  Tooltip
} from "@material-ui/core";
import { useRef } from "react";
import useAnimate from "./useAnimate";

const useStyles = makeStyles(theme => ({
  cont: {
    minHeight: `calc(100vh - ${theme.spacing(4)}px)`,
  },
  card: {
  height: "100%",
  backgroundColor: theme.palette.type === "dark"
    ? "rgba(20, 10, 35, 0.65)"
    : "rgba(255, 255, 255, 0.55)",
  backdropFilter: "blur(3px)",
},
  cardActionArea: {
    height: "100%",
  },
  media: {
    width: "100%",
    aspectRatio: "1 / 1",
    objectFit: "cover",
  },
  tooltip: {
  fontSize: "1.15rem",
},
}));

export default function Projects({ data }) {
  const classes = useStyles();
  const animRef = useRef(null);
  const animate = useAnimate(animRef);

  if (!data || data.length === 0) {
    return (
      <Typography variant="h6" align="center">
        Portfolio pieces coming soon.
      </Typography>
    );
  }

  return (
  <Grid
    container
    justify="center"
    alignItems="center"
    direction="column"
    className={classes.cont}
    ref={animRef}
  >
    <Grid item xs={12}>
      <Typography variant="h2" gutterBottom align="center">
        Portfolio
      </Typography>
    </Grid>

    <Grid container item xs={12} direction="row" spacing={2} justify="center">
      {data.map((item, i) => (
        <Grid item sm={4} xs={12} key={i}>
          <Fade in={animate} style={{ transitionDelay: `${200 * i}ms` }}>
            <Card className={classes.card}>
              <Tooltip
  title={item.title}
  placement="top"
  arrow
  classes={{ tooltip: classes.tooltip }}
>
  <CardActionArea
    className={classes.cardActionArea}
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <CardMedia
      component="img"
      image={item.image}
      title={item.title}
      className={classes.media}
       loading="lazy"
    />
  </CardActionArea>
</Tooltip>
            </Card>
          </Fade>
        </Grid>
      ))}
    </Grid>
  </Grid>
);
}