// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO9pTMtq0PIODDt2OO4_39JDy_GymSyY8",
  authDomain: "ldpt-db7e8.firebaseapp.com",
  projectId: "ldpt-db7e8",
  storageBucket: "ldpt-db7e8.appspot.com",
  messagingSenderId: "339882649080",
  appId: "1:339882649080:web:b268bc099814837f50a20d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
