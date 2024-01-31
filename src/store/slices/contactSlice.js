import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const url = "https://contact.mediusware.com/api";

const initialState = {
  contactItems: [],
  isLoading: true,
  formOpen: false,
  isOpen: false,
  category: "all",
};

export const getContactItems = createAsyncThunk(
  "contacts/getContactItems",
  async (name, thunkAPI) => {
    // const country = "us";
    try {
      // const resp = await axios.get(`${url}/country-contacts/${country}/`);
      const resp = await axios.get(`${url}/contacts/`);
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
    changeCat: (state, action) => {
      state.category = action.payload;
    },
    openModal: (state, action) => {
      state.category = action.payload;
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
        state.contactItems = action.payload.results;
      })
      .addCase(getContactItems.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

// console.log(contactSlice);
export const { changeCat, openModal, closeModal } = contactSlice.actions;

export default contactSlice.reducer;
