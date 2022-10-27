import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBKOtLwIG5rTSXUMdjoexULWA9AlgIgC_I",
  authDomain: "proyecto-final-88892.firebaseapp.com",
  projectId: "proyecto-final-88892",
  storageBucket: "proyecto-final-88892.appspot.com",
  messagingSenderId: "1045244523527",
  appId: "1:1045244523527:web:300ab82467f784a929e6a2"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
