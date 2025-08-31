import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { agencyService } from "./agencyService";

// Async thunk to create a new number
export const createAgency = createAsyncThunk(
  "agency/create",
  async (data, thunkAPI) => {
    try {
      return await agencyService.addAgency(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// // Async thunk to fetch all numbers
export const allAgency = createAsyncThunk(
  "agency/get-agency",
  async (_, thunkAPI) => {
    try {
      return await agencyService.getAgency();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const deleteAgency = createAsyncThunk(
  "agency/delete-agency",
  async (data, thunkAPI) => {
    try {
      return await agencyService.deleteAgency(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const fetchAcceptedRequestByAgentId = createAsyncThunk(
  "agency/fetch-accepted-request",
  async (agentId, thunkAPI) => {
    try {
      return await agencyService.getAcceptedRequestByAgentId(agentId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

const agencyState = {
  agency: [],  // Initialize as an empty array
  acceptedRequests: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const agencySlice = createSlice({
  name: "agency",
  initialState: agencyState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createAgency.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAgency.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // Optionally, you can handle this more gracefully by fetching the full list again:
        // state.number.push(action.payload);  // If you just want to add it to the existing state
        if (state?.isSuccess) {
          toast.success("Agency Created successfully");
        }
      })
      .addCase(createAgency.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state?.message) {
          toast.error("Try again");
          console.log(state?.message);
        }
      })
      .addCase(allAgency.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(allAgency.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.agency = action.payload.data;

      })
      .addCase(allAgency.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;

      })
      .addCase(deleteAgency.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAgency.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        // state.agency = action.payload;
        if (state?.isSuccess) {
          toast.success("Agency delete successfully");
        }

      })
      .addCase(deleteAgency.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;

      })

      .addCase(fetchAcceptedRequestByAgentId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAcceptedRequestByAgentId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // You can save this to a new field like:
        state.acceptedRequests = action.payload.data; // <- define `acceptedRequests` in initialState if needed
      })
      .addCase(fetchAcceptedRequestByAgentId.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => agencyState);
  },
});

export default agencySlice.reducer;
