import { initializeApp,getApp,getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { get } from "http";


const firebaseConfig = {
  apiKey: "AIzaSyAAMULzzd8CUO2gJhB995h778duss-GoYQ",
  authDomain: "prepwise-792cb.firebaseapp.com",
  projectId: "prepwise-792cb",
  storageBucket: "prepwise-792cb.firebasestorage.app",
  messagingSenderId: "1024275156683",
  appId: "1:1024275156683:web:34255684ddaca9e246d54e",
  measurementId: "G-LMDWGMXN8S"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig):getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);