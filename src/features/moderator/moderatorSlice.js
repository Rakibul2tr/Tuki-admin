import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { moderatorService } from "./moderatorService";
import { toast } from "react-toastify";

const initialState = {
  moderators: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

// Get moderator list
export const getModerators = createAsyncThunk("moderators/list", async (_, thunkAPI) => {
  try {
    return await moderatorService.listModerators();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

// Make moderator
export const makeModerator = createAsyncThunk("moderators/make", async (regNo, thunkAPI) => {
  try {
    return await moderatorService.makeModerator(regNo);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

// Remove moderator
export const removeModerator = createAsyncThunk("moderators/remove", async (regNo, thunkAPI) => {
  try {
    return await moderatorService.removeModerator(regNo);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

const moderatorSlice = createSlice({
  name: "moderator",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getModerators.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getModerators.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.moderators = action.payload.data || [];
      })
      .addCase(getModerators.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(makeModerator.fulfilled, (state, action) => {
        toast.success(action.payload.message || "User promoted to moderator");
      })
      .addCase(makeModerator.rejected, (state, action) => {
        toast.error(action.payload || "Failed to promote moderator");
      })

      .addCase(removeModerator.fulfilled, (state, action) => {
        toast.success(action.payload.message || "User removed from moderators");
      })
      .addCase(removeModerator.rejected, (state, action) => {
        toast.error(action.payload || "Failed to remove moderator");
      });
  },
});

export default moderatorSlice.reducer;
