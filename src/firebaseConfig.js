// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkT2DBOCMY7JQXrurhwYdFLxPgVCNzOu8",
  authDomain: "react-crud-2c4bb.firebaseapp.com",
  projectId: "react-crud-2c4bb",
  storageBucket: "react-crud-2c4bb.firebasestorage.app",
  messagingSenderId: "815357392238",
  appId: "1:815357392238:web:bf49433b737de5ec247d7f",
  measurementId: "G-F772LJ99WR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
