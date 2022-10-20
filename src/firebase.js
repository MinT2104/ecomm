// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "commodite-216f7.firebaseapp.com",
  projectId: "commodite-216f7",
  storageBucket: "commodite-216f7.appspot.com",
  messagingSenderId: "532168340322",
  appId: "1:532168340322:web:7a892295632dc2b2a8723b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) ;
export const db = getFirestore(app);


