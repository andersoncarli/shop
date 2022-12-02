import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

global.t = (txt) => {
  console.log(txt)
  return txt

}
import Stars from "./components/Stars"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Offer from "./components/Offer"
Object.assign(global, { Footer, Header, Stars, Offer })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
