// React Components
import React from 'react';
import './index.css';

// Material UI Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#212529',
    height: 95,
    paddingTop: '0.55rem',
  },
  toolbar: {
    minHeight: 64
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  container: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    fontSize: '1.85em',
    fontWeight: 'bold !important',    
    fontFamily: 'SB Heading, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
  },
  button: {
      marginRight: theme.spacing(1),
      fontSize: '1.2em',
      color: 'white',
      fontWeight: 'bold !important',    
      fontFamily: 'SB Heading, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
  }
}));

export default function NavBar() {
      const classes = useStyles();

      return (
        <div className={classes.root}>
          <AppBar position="static" className={classes.root}>
            <Toolbar className={classes.toolbar}>   
            <Container className={classes.container} >       
              <Typography className={classes.title} variant="h6" noWrap>
                ANDREW KELLEHER
              </Typography>
              <Hidden smDown>
              <div>
                <Button className={classes.button}>ABOUT</Button>
                <Button className={classes.button}>PORTFOLIO</Button>
                <Button className={classes.button}>CONTACT</Button>
              </div>
              </Hidden>
              <Hidden mdUp>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
              >
                <MenuIcon />
              </IconButton>
              </Hidden>
            </Container>    
            </Toolbar>
          </AppBar>
        </div>
      );
}
