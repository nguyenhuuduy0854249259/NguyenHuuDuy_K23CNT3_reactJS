import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './NhdApp';
import reportWebVitals from './reportWebVitals';
import NhdApp from './NhdApp';

const nhdRoot = ReactDOM.createRoot(document.getElementById('nhdRoot'));
nhdRoot.render(
  <React.StrictMode>
    <NhdApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
