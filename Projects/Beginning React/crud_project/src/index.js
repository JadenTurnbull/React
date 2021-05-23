import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "firebase/firestore";
import firebase from 'firebase/app';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBauz2AS6pAs9JwE9XhKKacpJxXt-YZLUI",
  authDomain: "chapter9-b730c.firebaseapp.com",
  databaseURL: "https://chapter9-b730c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chapter9-b730c",
  storageBucket: "chapter9-b730c.appspot.com",
  messagingSenderId: "340846409622",
  appId: "1:340846409622:web:bcc4ffb35f6cd40a57cfb7",
  measurementId: "G-Z776BSQK18"
};

firebase.initializeApp(firebaseConfig);
  firebase.analytics();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
