import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './nav/nav'


function App() {
  return (
    <div className="App">
      <Nav> </Nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my Portfolio.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
