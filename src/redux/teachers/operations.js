import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async () => {
    const response = await fetch(
      "https://66f71b9bb5d85f31a342083e.mockapi.io/teachers"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch teachers");
    }
    const data = await response.json();
    return data;
  }
);
