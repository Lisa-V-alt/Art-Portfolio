import { Avatar, Grid, makeStyles, Tooltip, Typography, Zoom } from "@material-ui/core";
import { useRef } from "react";
import data from '../data.json';
import useAnimate from "./useAnimate";

const { skills } = data;

const wrappedSkills = skills;

const useStyles = makeStyles(theme => ({
    cont: {
        minHeight: `calc(100vh - ${theme.spacing(4)}px)`,
    },
    skobj: {
        marginBottom: theme.spacing(4)
    },
    avatar: {
    height: theme.spacing(14),
    width: theme.spacing(14),
    padding: 0,
    backgroundColor: 'transparent',
    boxShadow: 'none',
    overflow: 'visible',
    transition: 'transform 0.18s ease',
    '&:hover': {
        transform: 'translateY(-4px) scale(1.03) !important',
        backgroundColor: 'transparent',
    },
},
    iconImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
    }
}));

export default function Skills() {

    const classes = useStyles()
    const animRef = useRef(null)
    const animate = useAnimate(animRef)

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
                Illustration Services
            </Typography>
        </Grid>

        <Grid container item xs={12} direction="column" spacing={1} alignItems="center">
            {
                Object.getOwnPropertyNames(wrappedSkills).map((title, id) =>
                    <Grid item key={id} className={classes.skobj}>
                        <Typography variant="h4" align="center" gutterBottom component="p">
                            {title}
                        </Typography>

                        <Grid container item direction="row" spacing={1} justify="center">
                            {
                                wrappedSkills[title].map(({ alt, image }, i) =>
                                    <Grid item key={i}>
                                        <Zoom in={animate} style={{ transitionDelay: `${20 * i}ms` }}>
                                            <Tooltip
  title={alt}
  placement="top"
  enterTouchDelay={0}
  leaveTouchDelay={2500}
  arrow
>
  <Avatar variant="rounded" className={classes.avatar}>
    <img src={image} alt={alt} className={classes.iconImage} />
  </Avatar>
</Tooltip>
                                        </Zoom>
                                    </Grid>
                                )
                            }
                        </Grid>
                    </Grid>
                )
            }
        </Grid>
    </Grid>
)
}