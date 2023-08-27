import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBJ_-7Nnzv_ZollAKayrL1XItD7WoFeTlg",
  authDomain: "clone-b5e3d.firebaseapp.com",
  projectId: "clone-b5e3d",
  storageBucket: "clone-b5e3d.appspot.com",
  messagingSenderId: "1014917309285",
  appId: "1:1014917309285:web:dcefe7e2e80c0836bcf78c",
  measurementId: "G-TG5EWS2H3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };