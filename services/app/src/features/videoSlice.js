import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState= {
  'isPending' : false,
  'videos' : [],
  'error' : ''
}

export const getVideosAsync = createAsyncThunk(
  'videos/get',
  async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/videos`);
    return response.json();
  }
);

export const videoSlice= createSlice({
  name: 'video',
  initialState,
  reducers:{
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVideosAsync.pending, (state) => {
        state.isPending = true;
      })
      .addCase(getVideosAsync.fulfilled, (state, action) => {
        state.isPending = false;
        state.videos = action.payload;
      })
      .addCase(getVideosAsync.rejected, (state, action) => {
        state.isPending = false;
        state.error = action.payload;
      });
  },
})

export const getVideos = (state) => state.video.videos;

export default videoSlice.reducer