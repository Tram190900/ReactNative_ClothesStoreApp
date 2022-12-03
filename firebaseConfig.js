// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase } from 'firebase/database';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIvgKgUtlckzZkxPbTUrHtj8rf3r8gnXY",
  authDomain: "appstore-a6234.firebaseapp.com",
  projectId: "appstore-a6234",
  storageBucket: "appstore-a6234.appspot.com",
  messagingSenderId: "1092746150630",
  appId: "1:1092746150630:web:9040590668071fcdd4b127",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app)