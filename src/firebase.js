// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZdjyVcJLUljswbgG_IJF61VMQc3xX2Pg",
  authDomain: "e-commercesite-d2843.firebaseapp.com",
  projectId: "e-commercesite-d2843",
  storageBucket: "e-commercesite-d2843.firebasestorage.app",
  messagingSenderId: "656451241155",
  appId: "1:656451241155:web:fe67b7a5b564876dfc0e76",
  measurementId: "G-BENMEXW946"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);