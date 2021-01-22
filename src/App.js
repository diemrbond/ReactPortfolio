// React Components
import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';

// Custom Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

// Material UI Components
// import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';

// Styles
const useStyles = makeStyles((theme) => ({
  app: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
  },
  site: {
    flex: 1
  },
}));

// App Function
function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <CssBaseline />
      <div className={classes.site}>
      <NavBar />
      <Hero />
      <About />
      <Portfolio />
      </div>
      <Footer />
    </div>
  );
}

export default App;
