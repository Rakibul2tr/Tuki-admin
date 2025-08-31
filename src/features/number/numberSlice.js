import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { numberService } from "./numberService";

// Async thunk to create a new number
export const createNumber = createAsyncThunk(
  "number/create",
  async (data, thunkAPI) => {
    try {
      return await numberService.addNumber(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Async thunk to fetch all numbers
export const allNumber = createAsyncThunk(
  "number/get-number",
  async (_, thunkAPI) => {
    try {
      return await numberService.getNumber();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const deleteNumber = createAsyncThunk(
  "number/delete-number",
  async (id, thunkAPI) => {
    try {
      return await numberService.deleteNumber(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

const numberState = {
  number: [],  // Initialize as an empty array
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const numberSlice = createSlice({
  name: "number",
  initialState: numberState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNumber.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNumber.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // Optionally, you can handle this more gracefully by fetching the full list again:
        // state.number.push(action.payload);  // If you just want to add it to the existing state
        if (state?.isSuccess) {
          toast.success("Number added successfully");
        }
      })
      .addCase(createNumber.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state?.message) {
          toast.error("Try again");
          console.log(state?.message);
        }
      })
      .addCase(allNumber.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(allNumber.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.number = action.payload;  // This should be an array
      })
      .addCase(allNumber.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })  .addCase(deleteNumber.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteNumber.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deletedNumber = action.payload;
        if (state?.isSuccess) {
          toast.success("Delete successfully");
        }
      })
      .addCase(deleteNumber.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => numberState);
  },
});

export default numberSlice.reducer;
