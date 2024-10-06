/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { ref, onValue } from "firebase/database";
import axios from "axios";
impport { getAuth } from "firebase/auth";

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
export const analytics = getAnalytics(app);
export const database = getDatabase(app);


export const fetchTeachers = async () => {
  try {
    const response = await axios.get(`https://${firebaseConfig.databaseURL}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching teachers:", error);
    throw error;
  }
};

fetchTeachers()
  .then((teachers) => {
    console.log("Teachers:", teachers);
  })
  .catch((error) => {
    console.error("Error fetching teachers:", error);
  });

export const teachersRef = ref(database, "teachers");
onValue(teachersRef, (snapshot) => {
  const teachers = snapshot.val();
  console.log(teachers);
});
 */
