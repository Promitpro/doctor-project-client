// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyBNuW1-XKljF-Z19vU4IwOhHXR_aYgB0bY",
  // authDomain: "doctors-portal-b68da.firebaseapp.com",
  // projectId: "doctors-portal-b68da",
  // storageBucket: "doctors-portal-b68da.appspot.com",
  // messagingSenderId: "169427642534",
  // appId: "1:169427642534:web:98a4fa0950d48a65056c67",

  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;