import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, get, onValue, update } from "firebase/database";
import { getFirestore, collection, addDoc, getDocs, doc, onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6lOdQXobH4uUg49C20uL1Qy0Z6kcgpfg",
  authDomain: "drinkscard-3daf9.firebaseapp.com",
  databaseURL: "https://drinkscard-3daf9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "drinkscard-3daf9",
  storageBucket: "drinkscard-3daf9.firebasestorage.app",
  messagingSenderId: "861755855859",
  appId: "1:861755855859:web:3455f63f28a2bd38533886",
  measurementId: "G-J614JVSC11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const dbRealtime = getDatabase(app);
export const dbFirestore = getFirestore(app);
