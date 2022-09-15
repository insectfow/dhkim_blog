// Import the functions you need from the SDKs you need
import { firebase } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqZm14M0znRb4dcuAiEfEhhTL883OJNIk",
  authDomain: "dhkim-blog.firebaseapp.com",
  projectId: "dhkim-blog",
  storageBucket: "dhkim-blog.appspot.com",
  messagingSenderId: "459819484223",
  appId: "1:459819484223:web:091a92d938d7d6bbba648a",
  measurementId: "G-3SMLRFGW9Q"
};

// Initialize Firebase
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
