import React, { useEffect } from 'react'
import logo from './logo.svg';
import { Toast } from './lib.esm'
import './static/index.css'
import './App.css';

function App() {
  useEffect(() => {
    Toast.info({text: 'hello world!'})
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
