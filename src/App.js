// React Components
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

// Material UI components
import Container from '@material-ui/core/Container';
import NavBar from "./components/NavBar";
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <NavBar />
      
    </div>
  );
}

export default App;
