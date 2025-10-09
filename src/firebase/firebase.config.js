// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdoXAD329DCh6XMOmDaXKhO8NIclh67Lo",
  authDomain: "the-teeth-wizard.firebaseapp.com",
  projectId: "the-teeth-wizard",
  storageBucket: "the-teeth-wizard.firebasestorage.app",
  messagingSenderId: "1016777190571",
  appId: "1:1016777190571:web:ba63b72f2f0902ce991bee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;