import { Grid, makeStyles, Typography, Tooltip, Avatar } from "@material-ui/core";
import data from '../data.json'
import simpleIcons from 'simple-icons'
import clsx from "clsx";
import Image from 'next/image'
import { iconify } from "./util";
import Cancel from "@material-ui/icons/Cancel";
const { about } = data

const dpx = about.social.length*10 - 2

const socialDetails = about.social.map(({ alt, icon, link }) => {
    const ic = simpleIcons.get(iconify(icon)) || {
        hex: '424242',
        component: <Cancel color="white" fontSize={36}/>
    }
    return {
        alt,
        backgroundColor: '#' + ic.hex,
        icon: ic.component || <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" xmlnsXlink="http://www.w3.org/1999/xlink">
            <title>{icon}</title>
            <path d={ic.path} fill="white"/>
        </svg>,
        link
    }
})

let iobj = {}
socialDetails.forEach(({ alt, backgroundColor }) => {
    iobj[alt] = { backgroundColor }
})

const useStyles = makeStyles(theme => ({
    cont: {
        minHeight: `calc(100vh - ${theme.spacing(4)}px)`,
        alignSelf: 'center',
        justifySelf: 'center'
    },
    avatar: {
        height: theme.spacing(8),
        width: theme.spacing(8),
        padding: theme.spacing(2),
        transition: 'transform 0.2s ease-in-out',  // Smooth transition
        '&:hover': {
            transform: 'scale(1.1)'  // Slightly enlarges the icon on hover
        }
    },
    dp: {
        height: theme.spacing(Math.max(dpx, 28)),
        width: theme.spacing(Math.max(dpx, 28))
    },
    ...iobj,
    credits: {
        fontSize: '0.75rem', // Small font size for the credits
        textAlign: 'center',
        marginTop: theme.spacing(2), // Add some space above the credits
        color: theme.palette.text.secondary, // Make the color subtle
    }
}))

export default function About() {
    const classes = useStyles()

    return(
        <Grid direction="row" container justify="center" alignItems="center" className={classes.cont}>
            <Grid item xs={12} lg={6}>
                <Typography variant="h2" gutterBottom component="p">
                    About me
                </Typography>
                <Typography variant="h5" gutterBottom component="p">
                    {about.description}
                </Typography>                
            </Grid>
            <Grid container direction="column" item xs={12} lg={6} spacing={2} justify="center" alignItems="center">
                <Grid item xs={12}>
                    <Avatar variant="rounded" className={classes.dp}>
                        <Image
                            alt="Display Picture"
                            src={about.picture}
                            layout="fill"
                        />
                    </Avatar>
                </Grid>
                <Grid container item xs={12} spacing={2} justify="center">
                {
                    socialDetails.map(({ alt, icon, link }, i) =>
                        <Grid item key={i}>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <Tooltip title={alt} placement="top">
                                    <Avatar variant="rounded" className={clsx([classes.avatar, classes[alt]])}>
                                        {icon}
                                    </Avatar>
                                </Tooltip>
                            </a> 
                        </Grid>
                    )
                }
                </Grid>                
            </Grid>

                        {/* Tiny container for artist credits */}
                        <Grid item xs={12}>
                <Typography className={classes.credits}>
                Special thanks to <a href="https://linktr.ee/rberi_/" target="_blank" rel="noopener noreferrer">Beri</a> for his 3d rendition of my workspace! 
                </Typography>
                <Typography className={classes.credits}>
                <a href="https://skfb.ly/oZD9p/" target="_blank" rel="noopener noreferrer">"Headset"</a>  by Tetra is licensed under <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">Creative Commons Attribution</a>. 
                </Typography>
                <Typography className={classes.credits}>
                <a href="https://skfb.ly/o9SRJ/" target="_blank" rel="noopener noreferrer">"Mechanical Keyboard - Aesthetic"</a> by M.Reslan is licensed under <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">Creative Commons Attribution</a>. 
                </Typography>
                <Typography className={classes.credits}>
                <a href="https://skfb.ly/o8pBD/" target="_blank" rel="noopener noreferrer">"Gameboy"</a>  by hirairmak is licensed under <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">Creative Commons Attribution</a>. 
                </Typography>
            </Grid>
        </Grid>

        

    )
}