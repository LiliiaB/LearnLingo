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

      console.log(response);
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
