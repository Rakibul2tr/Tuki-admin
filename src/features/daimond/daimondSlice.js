import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { daimondService } from "./daimondService";

export const createNewDiamondPackage = createAsyncThunk(
  "diamond/createNew",
  async (data, thunkAPI) => {
    try {
      const res = await daimondService.createNewDiamondPackage(data);
      toast.success("Diamond package created successfully!");
      return res.result;
    } catch (error) {
      const msg = error?.response?.data?.message || error.message;
      toast.error(msg);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const fetchAllDiamondPackage = createAsyncThunk(
  "diamond/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await daimondService.getAllDiamondPackages();
      return res.data;
    } catch (error) {
      const msg = error?.response?.data?.message || error.message;
      toast.error(msg);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const removeDiamondPackage = createAsyncThunk(
  "diamond/remove",
  async (id, thunkAPI) => {
    try {
      await daimondService.removeDiamondPackage(id);
      toast.success("Diamond package removed.");
      return id;
    } catch (error) {
      const msg = error?.response?.data?.message || error.message;
      toast.error(msg);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const getDiamondMetrics = createAsyncThunk(
  "diamond/getMetrics",
  async (_, thunkAPI) => {
    try {
      const res = await daimondService.getDiamondMetrics();
      return res.data;
    } catch (error) {
      const msg = error?.response?.data?.message || error.message;
      toast.error(msg);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const resetState = createAction("Reset_all");

const diamondState = {
  diamond: [],  // Initialize as an empty array
  metrics: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const daimondSlice = createSlice({
  name: "diamond",
  initialState: diamondState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewDiamondPackage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewDiamondPackage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.diamond.push(action.payload);
      })
      .addCase(createNewDiamondPackage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(fetchAllDiamondPackage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllDiamondPackage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.diamond = action.payload;
      })
      .addCase(fetchAllDiamondPackage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(removeDiamondPackage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeDiamondPackage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.diamond = state.diamond.filter((item) => item.id !== action.payload);
      })
      .addCase(removeDiamondPackage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getDiamondMetrics.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDiamondMetrics.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.metrics = action.payload;
      })
      .addCase(getDiamondMetrics.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(resetState, () => diamondState);
  },
});

export default daimondSlice.reducer;
