import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState= {
  'isPending' : false,
  'videos' : [],
  'activeVideo': {},
  'error' : ''
}

export const getVideosAsync = createAsyncThunk(
  'videos/get',
  async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/videos`);
    return response.json();
  }
);

export const getVideoByIdAsync = createAsyncThunk(
  'videos/getById',
  async (id) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/videos/${id}`);
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
      })
      .addCase(getVideoByIdAsync.pending, (state) => {
        state.isPending = true;
      })
      .addCase(getVideoByIdAsync.fulfilled, (state, action) => {
        state.isPending = false;
        state.activeVideo = action.payload;
      })
      .addCase(getVideoByIdAsync.rejected, (state, action) => {
        state.isPending = false;
        state.error = action.payload;
      });
  },
})

export const getVideos = (state) => state.video.videos;
export const getActiveVideo = (state) => state.video.activeVideo;

export default videoSlice.reducer