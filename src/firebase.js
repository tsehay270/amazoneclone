// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBTk-jwGREhevmxBlD4QayaVzVL0qkK_-k",
  authDomain: "clone-f0777.firebaseapp.com",
  projectId: "clone-f0777",
  storageBucket: "clone-f0777.appspot.com",
  messagingSenderId: "653779833144",
  appId: "1:653779833144:web:33b686ef7babd860fe31cd",
  measurementId: "G-VL8S1H9QXS",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();
export { auth, db };
