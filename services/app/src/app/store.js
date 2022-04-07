import { configureStore } from '@reduxjs/toolkit';
import videoReducer from '../features/videoSlice';
import playListReducer from '../features/playlistSlice';

export const store = configureStore({
  reducer: {
    video: videoReducer,
    playlist: playListReducer
  },
});