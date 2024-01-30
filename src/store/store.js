import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
import contactSlice from "./slices/contactSlice";

const store = configureStore({
  reducer: {
    contact: contactSlice,
    todo: todoSlice,
  },
});

export default store;
