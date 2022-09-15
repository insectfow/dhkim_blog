import Vue from 'vue';
import firebase from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

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
// const analytics = getAnalytics(app);

// firebase.initializeApp(firebaseConfig);
// export const db = firebase.firestore();


firebase.initializeApp(firebaseConfig);

Vue.prototype.$firebase = firebase;
