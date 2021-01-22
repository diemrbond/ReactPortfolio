// React Components
import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
  
//   const [state, setState] = useState();
  
//   useEffect(() => {
//     const hash = props.history.location.hash
//     if (hash && document.getElementById(hash.substr(1))) {
//         // Check if there is a hash and if an element with that id exists
//         document.getElementById(hash.substr(1)).scrollIntoView({behavior: "smooth"})
//     }
// }, [props.history.location.hash]) 

  return (
    <div className={classes.app}>
      <CssBaseline />
      <Router>
        <Link to="/about">About</Link>
        <div className={classes.site}>
        <Switch>
          <Route path="/about">  
          <NavBar />
          <Hero />
          <About />
          <Portfolio />
          </Route>
        </Switch>
          </div>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
