import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notificationService } from "./notificationService";



export const createNotification = createAsyncThunk(
  "notification/create",
  async (data, thunkAPI) => {
    try {
      const response = await notificationService.addNotification(data);
      toast.success(response.message || "Notification sent");
      return response;
    } catch (error) {
      toast.error("Failed to send notification");
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getActiveNotifications = createAsyncThunk(
  "notification/fetchActive",
  async (_, thunkAPI) => {
    try {
      const response = await notificationService.fetchActiveNotifications();
      return response.data;
    } catch (error) {
      toast.error("Failed to fetch notifications");
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);


export const removeNotification = createAsyncThunk(
  "notification/delete",
  async (id, thunkAPI) => {
    try {
      const response = await notificationService.deleteNotificationById(id);
      toast.success(response.message || "Notification deleted");
      return { id }; // returning ID for frontend state update
    } catch (error) {
      toast.error("Failed to delete notification");
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);





export const resetState = createAction("Reset_all");

const notificationState = {
  notification: [],  // Initialize as an empty array
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};






export const notificationSlice = createSlice({
  name: "notification",
  initialState: notificationState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNotification.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNotification.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload?.message;
      })
      .addCase(createNotification.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Fetch
      .addCase(getActiveNotifications.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getActiveNotifications.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.notifications = action.payload;
      })
      .addCase(getActiveNotifications.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(removeNotification.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.notifications = state.notifications.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(removeNotification.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Reset
      .addCase(resetState, () => notificationState);
  },
});

export default notificationSlice.reducer;
