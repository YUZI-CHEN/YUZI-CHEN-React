// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// 匯入firebase
import{getAuth,GoogleAuthProvider}from"firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfd1wqQrheKKXBb_K1LeqihC5uky_NwRQ",
  authDomain: "text-fe9dd.firebaseapp.com",
  projectId: "text-fe9dd",
  storageBucket: "text-fe9dd.firebasestorage.app",
  messagingSenderId: "175286394637",
  appId: "1:175286394637:web:d50ed913b5f812b8ea1a44",
  measurementId: "G-R4PW89EBW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 匯出
export const auth=getAuth(app);
export const provide=new GoogleAuthProvider();