// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN11tKFM8lsfVBPw3xHerKIPo0o7pcV5M",
  authDomain: "my-portfolio-5c781.firebaseapp.com",
  projectId: "my-portfolio-5c781",
  storageBucket: "my-portfolio-5c781.appspot.com",
  messagingSenderId: "601463585808",
  appId: "1:601463585808:web:a29075a00211393a735e95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);