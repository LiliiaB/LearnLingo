// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqfQyJJ4_YUeUmhSjMIna86gtcsAY42ZQ",
  authDomain: "learnlingo-852a3.firebaseapp.com",
  databaseURL:
    "https://learnlingo-852a3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "learnlingo-852a3",
  storageBucket: "learnlingo-852a3.appspot.com",
  messagingSenderId: "659350478702",
  appId: "1:659350478702:web:c8fd406d83792e6c66ab7f",
  measurementId: "G-4CE5TLQ352",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { database };
