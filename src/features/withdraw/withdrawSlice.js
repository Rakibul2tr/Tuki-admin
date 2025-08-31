import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withdrawService } from "./withdrawService";

export const addDiamondExchange = createAsyncThunk(
    "withdraw/addDiamondExchange",
    async ({ diamond, amount }, thunkAPI) => {
        try {
            const response = await withdrawService.addDiamondExchange(diamond, amount);
            toast.success("Diamond exchange added successfully!");
            return response.data;
        } catch (error) {
            const msg = error?.response?.data?.message || error.message;
            toast.error(msg);
            return thunkAPI.rejectWithValue(msg);
        }
    }
);


export const getAllDiamondExchanges = createAsyncThunk(
    "withdraw/getAllDiamondExchanges",
    async (_, thunkAPI) => {
        try {
            return await withdrawService.getAllDiamondExchanges();
        } catch (error) {
            const msg = error?.response?.data?.message || error.message;
            return thunkAPI.rejectWithValue(msg);
        }
    }
);

export const removeDiamondExchange = createAsyncThunk(
    "withdraw/removeDiamondExchange",
    async (id, thunkAPI) => {
        try {
            const response = await withdrawService.removeDiamondExchange(id);
            toast.success("Exchange entry removed.");
            return { id, ...response };
        } catch (error) {
            const msg = error?.response?.data?.message || error.message;
            toast.error(msg);
            return thunkAPI.rejectWithValue(msg);
        }
    }
);


export const getWithdrawRequestsByStatus = createAsyncThunk(
    "withdraw/getWithdrawRequestsByStatus",
    async (status, thunkAPI) => {
        try {
            return await withdrawService.getWithdrawRequestsByStatus(status);
        } catch (error) {
            const msg = error?.response?.data?.message || error.message;
            return thunkAPI.rejectWithValue(msg);
        }
    }
);

export const updateWithdrawRequestStatus = createAsyncThunk(
    "withdraw/updateWithdrawRequestStatus",
    async ({ id, status }, thunkAPI) => {
        try {
            const response = await withdrawService.updateWithdrawRequestStatus(id, status);
            toast.success("Withdraw request updated!");
            return response.data;
        } catch (error) {
            const msg = error?.response?.data?.message || error.message;
            toast.error(msg);
            return thunkAPI.rejectWithValue(msg);
        }
    }
);


export const resetState = createAction("Reset_all");

const withdrawState = {
    withdraw: [],  // Initialize as an empty array
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

export const withdrawSlice = createSlice({
    name: "withdraw",
    initialState: withdrawState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addDiamondExchange.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addDiamondExchange.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.message = "Diamond exchange added.";
            })
            .addCase(addDiamondExchange.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })


            .addCase(getAllDiamondExchanges.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllDiamondExchanges.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.withdraw = action.payload?.data || []; // assuming API response is { success, data: [...] }
            })
            .addCase(getAllDiamondExchanges.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })


            .addCase(removeDiamondExchange.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(removeDiamondExchange.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                // remove from list
                state.withdraw = state.withdraw.filter(item => item.id !== action.payload.id);
            })
            .addCase(removeDiamondExchange.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })

            .addCase(getWithdrawRequestsByStatus.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getWithdrawRequestsByStatus.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.withdrawRequest = action.payload?.data || [];
            })
            .addCase(getWithdrawRequestsByStatus.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })

            .addCase(updateWithdrawRequestStatus.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateWithdrawRequestStatus.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                // Update specific request in state if needed
                const updated = action.payload;
                state.withdrawRequest = state.withdrawRequest?.map(req =>
                    req.id === updated.id ? updated : req
                );
            })
            .addCase(updateWithdrawRequestStatus.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(resetState, () => withdrawState);
    },
});

export default withdrawSlice.reducer;
