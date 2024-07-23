// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASfjTHproZWOm7kEfOG6cKB4dhdyulUJ8",
  authDomain: "the-billy-imgdb.firebaseapp.com",
  projectId: "the-billy-imgdb",
  storageBucket: "the-billy-imgdb.appspot.com",
  messagingSenderId: "225284718307",
  appId: "1:225284718307:web:998853924585a149e94fd6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const imgDB = getStorage(firebaseApp);