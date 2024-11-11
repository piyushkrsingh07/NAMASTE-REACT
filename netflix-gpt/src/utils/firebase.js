// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHQXhDGOijTq46zYBfxp8p8ne6wNgeDxg",
  authDomain: "netflixgpt-7088b.firebaseapp.com",
  projectId: "netflixgpt-7088b",
  storageBucket: "netflixgpt-7088b.firebasestorage.app",
  messagingSenderId: "603647775943",
  appId: "1:603647775943:web:48d07f752e89edea695ae2",
  measurementId: "G-Q0D1TBJW9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);