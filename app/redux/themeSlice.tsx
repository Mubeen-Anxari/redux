import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    bgColor: "black",
    textColor: "red",
  },
  reducers: {
    updateTheme: (state, action) => {
      state.bgColor = action.payload
    },
  },
  //   extraReducers: (builder) => {},
});

export const { updateTheme } = themeSlice.actions;
