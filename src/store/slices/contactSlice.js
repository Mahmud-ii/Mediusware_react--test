import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const url = "https://contact.mediusware.com/api-doc/";

const initialState = {
  contactItems: [],
  isLoading: true,
  formOpen: false,
  translate: 0,
  isOpen: false,
};

export const getContactItems = createAsyncThunk(
  "contacts/getContactItems",
  async (name, thunkAPI) => {
    try {
      const resp = await axios.get(url);
      console.log(resp.data);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContactItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getContactItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cardItems = action.payload.Items;
      })
      .addCase(getContactItems.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

// console.log(contactSlice);
export const { openModal, closeModal } = contactSlice.actions;

export default contactSlice.reducer;
