import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { packageService } from "./packageService";

// Async thunk to create a new number
export const createPackage = createAsyncThunk(
  "package/create",
  async (data, thunkAPI) => {
    try {
      return await packageService.addPackages(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// // Async thunk to fetch all numbers
export const allPackage = createAsyncThunk(
  "package/get-package",
  async (query = {}, thunkAPI) => {
    try {
      return await packageService.getPackages(query);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const createVipSubPackage = createAsyncThunk(
  "package/create-vip-sub-package",
  async (data, thunkAPI) => {
    try {
      const res = await packageService.createVipSubPackage(data);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const removeVipPackage = createAsyncThunk(
  "package/remove-vip-package",
  async (id, thunkAPI) => {
    try {
      return await packageService.removeVipPackage(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);


export const deleteVipSubPackage = createAsyncThunk(
  "package/delete-vip-sub-package",
  async (id, thunkAPI) => {
    try {
      return await packageService.deleteVipSubPackage(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const updateVipSubPackage = createAsyncThunk(
  "package/update-vip-sub-package",
  async ({ id, data }, thunkAPI) => {
    try {
      return await packageService.updateVipSubPackage(id, data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);


export const fetchAllPackagePurchaseRequest = createAsyncThunk(
  "package/fetch-all-purchase-request",
  async (_, thunkAPI) => {
    try {
      return await packageService.fetchAllPackagePurchaseRequest();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const updatePackagePurchaseRequestStatus = createAsyncThunk(
  "package/update-purchase-request-status",
  async ({ id, status }, thunkAPI) => {
    try {
      return await packageService.updatePackagePurchaseRequestStatus({ id, status });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);




export const resetState = createAction("Reset_all");

const packageState = {
  package: [],  // Initialize as an empty array
  packagePurchaseRequests: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const packageSlice = createSlice({
  name: "package",
  initialState: packageState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPackage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPackage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // Optionally, you can handle this more gracefully by fetching the full list again:
        // state.number.push(action.payload);  // If you just want to add it to the existing state
        if (state?.isSuccess) {
          toast.success("Package added successfully");
        }
      })
      .addCase(createPackage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state?.message) {
          toast.error("Try again");
          console.log(state?.message);
        }
      })
      .addCase(allPackage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(allPackage.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.packages = action.payload;
      })
      .addCase(allPackage.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        state.isLoading = false;
        // toast.error(action.payload || "Failed to fetch packages");
      })
      .addCase(createVipSubPackage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createVipSubPackage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success("Sub-package added successfully");
      })
      .addCase(createVipSubPackage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        toast.error(action.payload || "Failed to add sub-package");
      })
      .addCase(removeVipPackage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeVipPackage.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success("VIP package deleted successfully");
      })
      .addCase(removeVipPackage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        toast.error(action.payload || "Failed to delete VIP package");
      })
      .addCase(deleteVipSubPackage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteVipSubPackage.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success("Sub-package deleted successfully");
      })
      .addCase(deleteVipSubPackage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        toast.error(action.payload || "Failed to delete sub-package");
      })
      .addCase(updateVipSubPackage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateVipSubPackage.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success("Sub-package updated successfully");
      })
      .addCase(updateVipSubPackage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        toast.error(action.payload || "Failed to update sub-package");
      })
      .addCase(fetchAllPackagePurchaseRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllPackagePurchaseRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.packagePurchaseRequests = action.payload.data || []; // Store in new state field
      })
      .addCase(fetchAllPackagePurchaseRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        toast.error(action.payload || "Failed to fetch purchase requests");
      })

      .addCase(updatePackagePurchaseRequestStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePackagePurchaseRequestStatus.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success("Status updated successfully");
      })
      .addCase(updatePackagePurchaseRequestStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        toast.error(action.payload || "Failed to update status");
      })
      .addCase(resetState, () => packageState);
  },
});

export default packageSlice.reducer;
