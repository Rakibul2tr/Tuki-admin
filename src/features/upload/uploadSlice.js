import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import uploadService from "./uploadService";


export const uploadVideo = createAsyncThunk(
  "upload/package-videos",
  async (data, thunkAPI) => {
    try {
      const formData = new FormData();
      // Assuming data is an array of video files
      for (let i = 0; i < data.length; i++) {
        formData.append("videos", data[i]);
      }
      return await uploadService.videoUpload(formData); // This should call the videoUpload service
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const uploadImage = createAsyncThunk(
//   'upload/image',
//   async (formData, thunkAPI) => {
//     try {
//       const response = await uploadService.uploadImg(formData);
//       console.log('✅ Upload response:', response);

//       return response
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

export const uploadImage = createAsyncThunk( 
  'upload/image',
  async (formData, thunkAPI) => {
    try {
      const response = await uploadService.uploadImg(formData);
      console.log('✅ Upload response:', response);

      const fileName = response?.fileName || response?.filename || response?.file;
      if (!fileName) throw new Error('Filename not found in upload response');

      const fullUrl = `https://upload.nrtuki.xyz/files/${fileName}`;
      return { url: fullUrl }; // 🟢 Return object with the image URL
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);


const initialState = {
  images: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const uploadSlice = createSlice({
  name: "imaegs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(uploadVideo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.Video = [];
      })
      .addCase(uploadVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(uploadImage.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.uploadedImageUrl = action.payload?.url;
        state.message = 'Image uploaded successfully';
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});
export default uploadSlice.reducer;