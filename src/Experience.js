import {
  Button,
  Card,
  CardContent,
  Fade,
  Grid,
  Hidden,
  makeStyles,
  Typography
} from "@material-ui/core";
import { Email, Instagram } from "@material-ui/icons";
import { useRef } from "react";
import useAnimate from "./useAnimate";

const useStyles = makeStyles(theme => ({
  cont: {
    minHeight: `calc(100vh - ${theme.spacing(4)}px)`,
  },
  card: {
    padding: theme.spacing(3),
    backgroundColor: theme.palette.type === "dark"
      ? "rgba(20, 10, 35, 0.65)"
      : "rgba(255, 255, 255, 0.55)",
    backdropFilter: "blur(3px)",
  },
  buttonRow: {
    marginTop: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
  },
  featureImage: {
  width: "100%",
  maxWidth: "650px",
  height: "auto",
  display: "block",
  margin: "0 auto",
},
}));

export default function Experience() {
  const classes = useStyles();
  const animRef = useRef(null);
  const animate = useAnimate(animRef);

  return (
  <>
    <Grid
  container
  justify="center"
  alignItems="center"
  spacing={4}
  className={classes.cont}
    >
      <Grid item xs={12} lg={6}>
        <Hidden mdDown>
          <Fade in={animate} style={{ transitionDelay: "100ms" }}>
            <img
              src="/feature/bunny.webp"
              alt="Bunny illustration"
              className={classes.featureImage}
            />
          </Fade>
        </Hidden>
      </Grid>

      <Grid item xs={12} lg={6}>
  <Typography
    variant="h2"
    gutterBottom
    align="center"
    ref={animRef}
  >
    Contact Me
  </Typography>

  <Fade in={animate} style={{ transitionDelay: "200ms" }}>
    <Card className={classes.card}>
            <CardContent>

              <Typography variant="h4" gutterBottom>
                Let’s make something whimsical.
              </Typography>

              <Typography variant="body1" paragraph>
                I welcome illustration commissions of all kinds, including book covers,
  book illustrations, character artwork, posters, fantasy maps, greeting cards,
  decorative borders, portraits, pet portraits, and other storybook-inspired creations.
              </Typography>

              <Typography variant="body1" paragraph>
                When getting in touch, please include a brief description of your project,
  the style or atmosphere you have in mind, your intended deadline, and how
  the artwork will be used.
              </Typography>

              <Typography variant="body1">
                 I aim to respond promptly to all commission enquiries and would be delighted
  to discuss your ideas in more detail! ✨
              </Typography>

              <Grid
                container
                direction="row"
                justify="center"
                className={classes.buttonRow}
              >
                <Button
                  variant="contained"
                  color="primary"
                  href="mailto:uhm.mothrat.lisag@gmail.com?subject=Commission%20Enquiry"
                  className={classes.button}
                  startIcon={<Email />}
                >
                  Email Me
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  href="https://www.instagram.com/mothrat.illustration/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.button}
                  startIcon={<Instagram />}
                >
                  Instagram
                </Button>
              </Grid>

            </CardContent>
          </Card>
        </Fade>
      </Grid>
    </Grid>
  </>
);
}