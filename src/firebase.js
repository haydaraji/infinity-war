// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb7m3KnczfGWI10JXa66z3B_L_gWe0BUE",
  authDomain: "haydar-simple-notes-firebase.firebaseapp.com",
  databaseURL: "https://haydar-simple-notes-firebase-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "haydar-simple-notes-firebase",
  storageBucket: "haydar-simple-notes-firebase.appspot.com",
  messagingSenderId: "72616590817",
  appId: "1:72616590817:web:fa2a4cc93753125e96a6a0",
  measurementId: "G-Z9Y1F2C25W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore();