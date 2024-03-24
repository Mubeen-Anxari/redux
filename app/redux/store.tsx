import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useSlice } from "./usersSlice";
import { themeSlice } from "./themeSlice";
import { todoSlice } from "./todoSlice";
const store = configureStore({
  reducer: {
    user: useSlice.reducer,
    theme: themeSlice.reducer,
    todos: todoSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; //

export default store;
