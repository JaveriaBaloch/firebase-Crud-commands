// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg_sjeyfymGTn2Pa4dNb0pjzitcuxfpDg",
  authDomain: "project-2f74f.firebaseapp.com",
  projectId: "project-2f74f",
  storageBucket: "project-2f74f.appspot.com",
  messagingSenderId: "243400103713",
  appId: "1:243400103713:web:552709252b7864d64e9060",
  measurementId: "G-MMQJK6G150"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)