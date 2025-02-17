import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NhdApp from './NhdApp';
import reportWebVitals from './reportWebVitals';

const NhdRoot = ReactDOM.createRoot(document.getElementById('NhdRoot'));
NhdRoot.render(
  <React.StrictMode>
    <NhdApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
