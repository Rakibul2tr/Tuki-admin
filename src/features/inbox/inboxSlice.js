// features/inbox/inboxSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { inboxService } from "./inboxService";

const initialState = {
  inbox: [],
  messages: [],
  messageTotalCount: 0,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const fetchInboxByRegNo = createAsyncThunk(
  "inbox/fetchByRegNo",
  async (regNo, thunkAPI) => {
    try {
      const response = await inboxService.fetchAllConversations(regNo);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchP2PMessages = createAsyncThunk(
  "inbox/fetchP2PMessages",
  async ({ userId1, userId2, page = 1, pageSize = 20 }, thunkAPI) => {
    try {
      const response = await inboxService.fetchP2PMessageHistory({ userId1, userId2, page, pageSize });
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

const inboxSlice = createSlice({
  name: "inbox",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInboxByRegNo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchInboxByRegNo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.inbox = action.payload;
      })
      .addCase(fetchInboxByRegNo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(fetchP2PMessages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchP2PMessages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.messages = action.payload.data;
        state.messageTotalCount = action.payload.totalCount;
      })
      .addCase(fetchP2PMessages.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default inboxSlice.reducer;
