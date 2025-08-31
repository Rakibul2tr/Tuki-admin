import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { animationService } from './animationService';
import { toast } from 'react-toastify';

export const fetchAllAnimations = createAsyncThunk(
  'animation/fetchAll',
  async (_, thunkAPI) => {
    try {
      return await animationService.fetchAllAnimation();
    } catch (err) {
      const msg = err?.response?.data?.message || err.message;
      toast.error(msg);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);
export const fetchAllFrame = createAsyncThunk(
  'frame/fetchAll',
  async (_, thunkAPI) => {
    try {
      return await animationService.fetchAllFrame();
    } catch (err) {
      const msg = err?.response?.data?.message || err.message;
      toast.error(msg);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const createAnimation = createAsyncThunk(
  'animation/create',
  async (data, thunkAPI) => {
    try {
      const res = await animationService.createAnimation(data);
      toast.success('Animation created successfully!');
      return res.result;
    } catch (err) {
      const msg = err?.response?.data?.message || err.message;
      toast.error(msg);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);
export const createFrame = createAsyncThunk(
  'frame/create',
  async (data, thunkAPI) => {
    try {
      const res = await animationService.createFrame(data);
      toast.success('Animation created successfully!');
      return res.result;
    } catch (err) {
      const msg = err?.response?.data?.message || err.message;
      toast.error(msg);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const updateAnimation = createAsyncThunk(
  'animation/update',
  async ({ id, data }, thunkAPI) => {
    try {
      const res = await animationService.updateAnimation(id, data);
      toast.success('Animation updated.');
      return res.result;
    } catch (err) {
      const msg = err?.response?.data?.message || err.message;
      toast.error(msg);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const removeAnimation = createAsyncThunk(
  'animation/delete',
  async (id, thunkAPI) => {
    try {
      await animationService.removeAnimation(id);
      toast.success('Animation removed.');
      return id;
    } catch (err) {
      const msg = err?.response?.data?.message || err.message;
      toast.error(msg);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);
export const removeFrame = createAsyncThunk(
  'frame/delete',
  async (id, thunkAPI) => {
    try {
      await animationService.removeFrame(id);
      toast.success('Animation removed.');
      return id;
    } catch (err) {
      const msg = err?.response?.data?.message || err.message;
      toast.error(msg);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

// Optional: reset state
export const resetAnimationState = createAction('animation/reset');

const initialState = {
  animations: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};

const animationSlice = createSlice({
  name: 'animation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // FETCH
      .addCase(fetchAllAnimations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllAnimations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.animations = action.payload?.result || [];
      })
      .addCase(fetchAllAnimations.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(fetchAllFrame.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllFrame.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.frame = action.payload?.data || [];
      })
      .addCase(fetchAllFrame.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // CREATE
      .addCase(createAnimation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAnimation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createAnimation.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createFrame.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createFrame.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createFrame.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // UPDATE
      .addCase(updateAnimation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAnimation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.animations = state.animations.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(updateAnimation.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // DELETE
      .addCase(removeAnimation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeAnimation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.animations = state.animations.filter((item) => item.id !== action.payload);
      })
      .addCase(removeAnimation.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(removeFrame.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeFrame.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.animations = state.animations.filter((item) => item.id !== action.payload);
      })
      .addCase(removeFrame.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // RESET
      .addCase(resetAnimationState, () => initialState);
  },
});

export default animationSlice.reducer;
