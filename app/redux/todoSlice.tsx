import { Action, createSlice } from "@reduxjs/toolkit";
type ActionType = {
  payload: string;
};
export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action: ActionType) => {
      const newArr = [...state.todos, action.payload];
      state.todos = Object.assign(newArr);
    },
    removeTodo: (state, action: ActionType) => {
      const newArr = state.todos?.filter((item) => item !== action.payload);
      state.todos = Object.assign(newArr);
    },
  },
  //   extraReducers: (builder) => {},
});

export const { addTodo, removeTodo } = todoSlice.actions;
