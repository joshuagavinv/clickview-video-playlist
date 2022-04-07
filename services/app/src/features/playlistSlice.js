import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState= {
  'isPending' : false,
  'playlists' : [],
  'activePlaylist': {},
  'error' : ''
}

export const getPlaylistsAsync = createAsyncThunk(
  'playlists/get',
  async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/playlists`);
    return response.json();
  }
);

export const getPlaylistByIdAsync = createAsyncThunk(
  'playlists/getById',
  async (id) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/playlists/${id}`);
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
      })
      .addCase(getPlaylistByIdAsync.pending, (state) => {
        state.isPending = true;
      })
      .addCase(getPlaylistByIdAsync.fulfilled, (state, action) => {
        state.isPending = false;
        state.activePlaylist = action.payload;
      })
      .addCase(getPlaylistByIdAsync.rejected, (state, action) => {
        state.isPending = false;
        state.error = action.payload;
      });
  },
})

export const getPlaylists = (state) => state.playlist.playlists;
export const getActivePlaylist = (state) => state.playlist.activePlaylist;
export const getVideoIds = (state) => state.playlist.activePlaylist.videoIds;
export default playlistSlice.reducer
