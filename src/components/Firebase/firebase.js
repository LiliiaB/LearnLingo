import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBqfQyJJ4_YUeUmhSjMIna86gtcsAY42ZQ",
  authDomain: "learnlingo-852a3.firebaseapp.com",
  databaseURL: "https://learnlingo-852a3.appspot.com/teachers.json",
  projectId: "learnlingo-852a3",
  storageBucket: "learnlingo-852a3.appspot.com",
  messagingSenderId: "659350478702",
  appId: "1:659350478702:web:c8fd406d83792e6c66ab7f",
  measurementId: "G-4CE5TLQ352",
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
