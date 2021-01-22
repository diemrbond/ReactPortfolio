// React Components
import React from 'react';

// Custom Components
import Project from '../Project';

// Material UI Components
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import Bodyweight from '../Project/assets/bodyweight.gif'
import Readme from '../Project/assets/readme.png'
import Truck from '../Project/assets/truck.png'

const images = [
    {
      url: Truck,
      title: 'DirectShip WA',
      width: 332,
      height: 240
    },
    {
      url: Bodyweight,
      title: 'Bodyweight Gym',
      width: 332,
      height: 240
    },
    {
      url: Readme,
      title: 'Readme Generator',
      width: 332,
      height: 240
    },
  ];

// Styles
const useStyles = makeStyles((theme) => ({
    portfolio: {
        color: '#f8f9fa',
        background: '#ffffff',
        minHeight: 500,
    },
    typography: {
        color: '#212529',
        fontSize: '3rem',
        lineHeight: "2.5rem",
        fontWeight: 700,
        marginBottom: 14,
        fontFamily: 'SB Heading, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
    },
    body: {
        color: '#212529',
        fontSize: '1rem',
        marginTop: 14,
        marginRight: 14,
        marginLeft: 14,
    },
    button: {
        textTransform: 'unset !important',
    },
    grid: {
        paddingTop: 50,
        paddingBottom: 50,
    },
    paragraph: {
        display: "flex",
        justifyContent: "center",
    }
}));

// Portfolio Component
export default function Portfolio() {
    const classes = useStyles();

    return (
        <div >
            <div className={classes.portfolio}>
                <Grid container spacing={0} alignItems="center" justify="center" style={{ minHeight: 500 }}>
                    <div>
                     <Grid item xs={12} align="center" className={classes.grid}>
                        <Typography align="center" variant="h4" className={classes.typography}>PORTFOLIO</Typography>                          
                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><Icon className="fas fa-folder-open" /></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        {images.map((image) => (
                            <Project image={image}/>
                        ))}
                   </Grid>
                   </div>
                </Grid>
            </div>
        </div>
    );
}