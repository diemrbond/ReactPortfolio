import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  footer: {
    background: '#1a252f',
    color: 'white',    
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
  },
  typography: {
    fontSize: 13,
    fontWeight: 400
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div >
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography align="center" variant="subtitle2" className={classes.typography}>{'Copyright © '}  {new Date().getFullYear()} Andrew Kelleher </Typography>
        </Container>
      </footer>
    </div>
  );
}