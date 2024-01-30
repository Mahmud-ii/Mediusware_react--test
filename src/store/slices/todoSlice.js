import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoItems: [],
  category: "all",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.todoItems.push(action.payload);
    },
    changeCat: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { addItem, changeCat } = todoSlice.actions;

export default todoSlice.reducer;
