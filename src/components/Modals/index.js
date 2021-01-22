import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import WeatherPreview from './assets/weather-preview.png';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',      
    justifyContent: 'center',
    overflowY:'scroll',
    height:'100%',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    borderRadius: '2rem',
    border: 0,
    outline: 'none',
    maxWidth: 900,
    margin: 50,
    paddingTop: 50,
    paddingBottom: 50,
  },
  imageSrc: {
    height: '100%',
    width: '100%'
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
    margin: 5,
    color: '#FFFFFF',
    background: '#1abc9c',
    '&:hover': {
      color: '#FFFFFF',
      background: "#159a80",
  },
},
  gitButton: {
      textTransform: 'unset !important',
      margin: 5,
      color: '#FFFFFF',
      background: '#17a2b8',
      '&:hover': {
        color: '#FFFFFF',
        background: "#138496",
    },
  },
icons: {
  marginRight: 10
}
}));

export default function Modals() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper} align="center">
            <Typography id="transition-modal-title" align="center" variant="h2" className={classes.typography}>Weather Dashboard</Typography>  
            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><Icon className="fas fa-star" /></div>
                <div class="divider-custom-line"></div>
            </div>
            <img className={classes.imageSrc} src={WeatherPreview} smDown={9}/>
            <Typography id="transition-modal-description" variant="body1" className={classes.body}>For this project we needed to make a Weather Dashboard, that we can search for a City using the openweathermap API returning the temperature, humidity, UV index, wind speed and a 5 day forecast. The cities needed to be added to a search history for easy re-searching.</Typography>
            <Box m={5} >
                <Button variant="contained" color="warning" disableElevation size="large" className={classes.button}>Visit Project</Button>
                <Button variant="contained" color="warning" disableElevation size="large" className={classes.gitButton}><Icon className={"fab fa-github " + classes.icons} /> Visit GitHub</Button>
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
