/* import axios from "axios";
import firebase from "firebase/app";
import "firebase/database";

const fetchTeachers = async () => {
  try {
    const response = await axios.get(
      `https://${firebaseConfig.databaseURL}/teachers.json`
    );
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
 */
