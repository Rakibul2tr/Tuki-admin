import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      return await authService.registerUser(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const loginAdmin = createAsyncThunk(
  "auth/loginAdmin",
  async (userData, thunkAPI) => {
    try {
      return await authService.adminLogin(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);



export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      return await authService.loginUser(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUser = createAsyncThunk(
  "auth/user",
  async (userId, thunkAPI) => {
    try {
      return await authService.getAUser(userId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSend = createAsyncThunk(
  "auth/getSend",
  async (thunkAPI) => {
    try {
      return await authService.getSendTotal();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getReceive = createAsyncThunk(
  "auth/getReceive",
  async (thunkAPI) => {
    try {
      return await authService.getReceiveTotal();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getPercentage = createAsyncThunk(
  "auth/getPercentage",
  async (thunkAPI) => {
    try {
      return await authService.getPercentTotal();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const getAllSendHistories = createAsyncThunk(
  "auth/getAllSendHistories",
  async (thunkAPI) => {
    try {
      return await authService.getAllSendHistory();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const addDaimond = createAsyncThunk(
  "auth/addDaimond",
  async ({ id, data }, thunkAPI) => {
    try {
      return await authService.addUserDaimond(id, data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const addSend = createAsyncThunk(
  "auth/addSend",
  async (data, thunkAPI) => {
    try {
      return await authService.addSendTotal(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addReceive = createAsyncThunk(
  "auth/addReceive",
  async (data, thunkAPI) => {
    try {
      return await authService.delSendTotal(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const forgetPassword = createAsyncThunk(
  "auth/forgetPassword",
  async (data, thunkAPI) => {
    try {
      return await authService.forgetPass(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);



export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async ({ email, data }, thunkAPI) => {
    try {
      return await authService.resetPass(email, data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteDaimond = createAsyncThunk(
  "auth/deleteDaimond",
  async ({ id, data }, thunkAPI) => {
    try {
      return await authService.delDaimond(id, data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const userLock = createAsyncThunk(
  "auth/userLock",
  async ({ id }, thunkAPI) => {
    try {
      console.log('id-----id', id);

      return await authService.lockUser(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const blockUserDevice = createAsyncThunk(
  "auth/blockUserDevice",
  async ({ id, data }, thunkAPI) => {
    try {

      return await authService.blockUserUser(id, data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userBlock = createAsyncThunk(
  "auth/userBlock",
  async ({ id, data }, thunkAPI) => {
    try {

      return await authService.blockUser(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteAllSentDaiHistories = createAsyncThunk(
  "auth/deleteAllSentDaiHistories",
  async (thunkAPI) => {
    try {

      return await authService.deleteAllSentDaiHistory();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);










export const getAllUsers = createAsyncThunk(
  "users/get-all",
  async ({ page, limit }, thunkAPI) => {
    try {
      return await authService.fetchUsers({ page, limit });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
export const fetchBlockedDevice = createAsyncThunk(
  "users/fetchBlockedDevice",
  async (thunkAPI) => {
    try {
      return await authService.fetchBlockedDevices();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);


export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await authService.updateUser(id, data);
      return response.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);


export const addDiamondToUser = createAsyncThunk(
  "user/addDiamondToUser",
  async ({ userId, data }, thunkAPI) => {
    try {
      return await authService.addUserDaimond(userId, data);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);


export const removeDiamondToUser = createAsyncThunk(
  "user/removeDiamondToUser",
  async ({ userId, data }, thunkAPI) => {
    try {
      return await authService.removeUserDaimond(userId, data);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const deleteUser = createAsyncThunk(
  "auth/delete-user",
  async (id, thunkAPI) => {
    try {
      return await authService.deleteAUser(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const updateRegNumberToUser = createAsyncThunk(
  "auth/updateRegNumberToUser",
  async ({ userId, newRegNumber }, thunkAPI) => {
    try {
      return await authService.updateUserRegNumber(userId, newRegNumber);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const deleteUserPurchase = createAsyncThunk(
  "user/deleteUserPurchase",
  async ({ userId, name }, thunkAPI) => {
    try {
      return await authService.removePurchase(userId, name);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);



export const blockADevice = createAsyncThunk(
  "device/blockADevice",
  async (deviceId, thunkAPI) => {
    try {
      return await authService.blockDevice(deviceId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const unblockADevice = createAsyncThunk(
  "device/unblockADevice",
  async (deviceId, thunkAPI) => {
    try {
      return await authService.unblockDevice(deviceId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);


export const fetchUserByRegNo = createAsyncThunk(
  'user/fetchUserByRegNo',
  async (regNo, thunkAPI) => {
    try {
      return await authService.getUserByRegNo(regNo);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);


export const fetchAllLiveStreams = createAsyncThunk(
  'user/fetchAllLiveStreams',
  async (hostId, thunkAPI) => {
    try {
      return await authService.getLivestreamsByHostId(hostId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data || error.message);
    }
  }
);


const initialState = {
  user: [],
  userByRegNo: null,
  totalCount: 0,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;

      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;

      })
      .addCase(loginAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.admin = action.payload;

      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;

      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;

      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;

      }).addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;

      })
      .addCase(getUser.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;

      })

      .addCase(getSend.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSend.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.totalSend = action.payload;

      })
      .addCase(getSend.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;

      })
      .addCase(getReceive.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReceive.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.totalReceive = action.payload;

      })
      .addCase(getReceive.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;

      })
      .addCase(getPercentage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPercentage.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.totalPercent = action.payload;

      })
      .addCase(getPercentage.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;

      })

      .addCase(getAllSendHistories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllSendHistories.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.sendHistory = action.payload;

      })
      .addCase(getAllSendHistories.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;

      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.userUpdate = action.payload;

      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;

      })
      .addCase(addDaimond.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addDaimond.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.userDaimond = action.payload;

      })
      .addCase(addDaimond.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;

      })
      .addCase(addSend.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addSend.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addSend.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;

      })
      .addCase(addReceive.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addReceive.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addReceive.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;

      })
      .addCase(deleteDaimond.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteDaimond.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.userDaimond = action.payload;

      })
      .addCase(deleteDaimond.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;

      })
      .addCase(userLock.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userLock.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.userLock = action.payload;

      })
      .addCase(userLock.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;

      })
      .addCase(blockUserDevice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(blockUserDevice.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.blockUserDevice = action.payload;

      })
      .addCase(blockUserDevice.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;

      })
      .addCase(userBlock.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userBlock.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.userBlock = action.payload;

      })
      .addCase(userBlock.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;

      })
      .addCase(deleteAllSentDaiHistories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAllSentDaiHistories.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        if (state?.isSuccess) {
          toast.success("All history deleted successfully");
        }
      })
      .addCase(deleteAllSentDaiHistories.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;

      })
      .addCase(forgetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgetPassword.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        if (state?.isSuccess) {
          toast.success("Check your Email to reset password");
        }
      })
      .addCase(forgetPassword.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
        if (state?.isError) {
          console.log(state.message);

          toast.error("Something went wrong!");
        }
      })
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        if (state?.isSuccess) {
          toast.success("Password changed Go to App and Login");
        }
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
        if (state?.isError) {
          console.log(state.message);

          toast.error("Something went wrong!");
        }
      })
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        if (state?.isSuccess) {
          toast.success("User delete successfully");
        }
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
        if (state?.isError) {
          console.log(state.message);

          toast.error("Something went wrong!");
        }
      })

      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload.result; // 👈 from your API
        state.totalCount = action.payload.totalCount; // 👈 total user count from backend
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      .addCase(fetchBlockedDevice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBlockedDevice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.BlockedDevices = action.payload.data; // 👈 from your API
      })
      .addCase(fetchBlockedDevice.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      .addCase(addDiamondToUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addDiamondToUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        toast.success("💎 Diamond added successfully!");
      })
      .addCase(addDiamondToUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(removeDiamondToUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeDiamondToUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        toast.success("💎 Diamond remove successfully!");
      })
      .addCase(removeDiamondToUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(updateRegNumberToUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateRegNumberToUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        toast.success("Id update successfully!");
      })
      .addCase(updateRegNumberToUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(deleteUserPurchase.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUserPurchase.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        toast.success("Remove successfully!");
      })
      .addCase(deleteUserPurchase.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(fetchUserByRegNo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserByRegNo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userByRegNo = action.payload.result; // Store under custom key
      })
      .addCase(fetchUserByRegNo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(fetchAllLiveStreams.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAllLiveStreams.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(fetchAllLiveStreams.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })


  },
});

export default authSlice.reducer;




















