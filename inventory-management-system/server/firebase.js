// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoT2wvA9dCYQdXigLR5R9YGwqxUwoTTkc",
  authDomain: "the-billy-project-6270b.firebaseapp.com",
  projectId: "the-billy-project-6270b",
  storageBucket: "the-billy-project-6270b.appspot.com",
  messagingSenderId: "239572483994",
  appId: "1:239572483994:web:ecb84a0dcadd14a04ec423"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
export default firebaseapp;