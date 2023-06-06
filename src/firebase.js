// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR1BIJjqseCaegRwQBzmhh4VLa1ZwTcdw",
  authDomain: "ecommerceapp-b249e.firebaseapp.com",
  projectId: "ecommerceapp-b249e",
  storageBucket: "ecommerceapp-b249e.appspot.com",
  messagingSenderId: "915894605775",
  appId: "1:915894605775:web:5c15be31b73f60850564ba",
  measurementId: "G-RGY2VB0QPE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);
export { auth, analytics, db };
export default app
