import React from 'react';
import logo from './logo.svg';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Deploying a React App on <code>IPFS</code> on Fleek
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://fleek.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Fleek
        </a>
      </header>
    </div>
  );
}

export default App;
