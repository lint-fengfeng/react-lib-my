import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Toast } from './lib.esm'

const rootEl =  document.getElementById('root')

Toast.init({ rootEl, duration: 100000 })
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootEl
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
