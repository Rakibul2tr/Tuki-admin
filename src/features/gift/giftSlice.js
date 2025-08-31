import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { giftService } from "./giftService";

// Async thunk to create a new number
export const createGift = createAsyncThunk(
  "gift/create",
  async (data, thunkAPI) => {
    try {
      return await giftService.addGift(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// // Async thunk to fetch all numbers
export const allGift = createAsyncThunk(
  "gift/get-gift",
  async (_, thunkAPI) => {
    try {
      return await giftService.getGifts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const deleteGift = createAsyncThunk(
  "Gift/delete-Gift",
  async (id, thunkAPI) => {
    try {
      return await giftService.deleteGits(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

const giftState = {
  gift: [],  // Initialize as an empty array
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const giftSlice = createSlice({
  name: "gift",
  initialState: giftState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createGift.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createGift.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // Optionally, you can handle this more gracefully by fetching the full list again:
        // state.number.push(action.payload);  // If you just want to add it to the existing state
        if (state?.isSuccess) {
          toast.success("Gift added successfully");
        }
      })
      .addCase(createGift.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state?.message) {
          toast.error("Try again");
          console.log(state?.message);
        }
      })
      .addCase(allGift.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(allGift.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.gift = action.payload;
       
      })
      .addCase(allGift.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
        
      })
      .addCase(deleteGift.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteGift.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        if (state?.isSuccess) {
          toast.success("Gift delete successfully");
        }
       
      })
      .addCase(deleteGift.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
        
      })
      .addCase(resetState, () => giftState);
  },
});

export default giftSlice.reducer;
