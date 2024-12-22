import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import React_api from './G1_pofil/React_API';
// import App from './App';
// import Blog from './rout/blog';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
     <React_api />
     {/* <App/> */}
     {/* <Blog /> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals