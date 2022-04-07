import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState= {
  'isPending' : false,
  'playlists' : [],
  'error' : ''
}

export const getPlaylistsAsync = createAsyncThunk(
  'playlists/get',
  async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/playlists`);
    return response.json();
  }
);

export const playlistSlice= createSlice({
  name: 'playlist',
  initialState,
  reducers:{
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPlaylistsAsync.pending, (state) => {
        state.isPending = true;
      })
      .addCase(getPlaylistsAsync.fulfilled, (state, action) => {
        state.isPending = false;
        state.playlists = action.payload;
      })
      .addCase(getPlaylistsAsync.rejected, (state, action) => {
        state.isPending = false;
        state.error = action.payload;
      });
  },
})

export const getPlaylists = (state) => state.playlist.playlists;

export default playlistSlice.reducer