import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

axios.defaults.baseURL =
  "https://learnlingo-852a3-default-rtdb.europe-west1.firebasedatabase.app";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/teachers.json");

      if (response.data) {
        const teachers = Object.keys(response.data).map((key) => ({
          id: key,
          ...response.data[key],
        }));
        return teachers;
      } else {
        toast.error("No teachers found.");
        return [];
      }
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
