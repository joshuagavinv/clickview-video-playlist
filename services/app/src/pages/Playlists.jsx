import React, { useEffect } from 'react';
import List from '../components/List'
import { useSelector, useDispatch } from 'react-redux';


import {
  getPlaylistsAsync,
  getPlaylists,
} from '../features/playlistSlice';

const Playlists = () => {
  const dispatch = useDispatch();
  const playlists = useSelector(getPlaylists)

  useEffect(() => {
    dispatch(getPlaylistsAsync())
  },[])
  return (
    <div>
      <h3>Welcome to Clickview playlists</h3>
      <List lists={playlists} type="playlist"/>
    </div>
  );
};

export default Playlists;