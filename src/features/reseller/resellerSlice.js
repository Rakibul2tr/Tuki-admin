import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { resellerService } from "./resellerService";

export const makeReseller = createAsyncThunk(
    "reseller/make",
    async (regNo, thunkAPI) => {
        try {
            const response = await resellerService.makeReseller(regNo);
            toast.success(response.message || "User is now a reseller.");
            return response;
        } catch (error) {
            const msg = error?.response?.data?.message || error.message;
            toast.error(msg);
            return thunkAPI.rejectWithValue(msg);
        }
    }
);


export const listResellers = createAsyncThunk(
    "reseller/list",
    async (_, thunkAPI) => {
        try {
            return await resellerService.listResellers();
        } catch (error) {
            const msg = error?.response?.data?.message || error.message;
            return thunkAPI.rejectWithValue(msg);
        }
    }
);


export const removeReseller = createAsyncThunk(
    "reseller/remove",
    async (regNo, thunkAPI) => {
        try {
            const response = await resellerService.removeReseller(regNo);
            toast.success(response.message || "User removed from reseller.");
            return response;
        } catch (error) {
            const msg = error?.response?.data?.message || error.message;
            toast.error(msg);
            return thunkAPI.rejectWithValue(msg);
        }
    }
);




export const resetState = createAction("Reset_all");

const resellerState = {
    reseller: [],  // Initialize as an empty array
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

export const resellerSlice = createSlice({
    name: "reseller",
    initialState: resellerState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(makeReseller.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(makeReseller.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.message = action.payload?.message || "";
            })
            .addCase(makeReseller.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })


            .addCase(listResellers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(listResellers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.reseller = action.payload?.data || [];
            })
            .addCase(listResellers.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })


            .addCase(removeReseller.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(removeReseller.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.message = action.payload?.message || "";
            })
            .addCase(removeReseller.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })




            .addCase(resetState, () => resellerState);
    },
});

export default resellerSlice.reducer;
