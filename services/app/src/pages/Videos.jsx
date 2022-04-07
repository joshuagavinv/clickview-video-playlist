import React, { useEffect } from 'react';
import List from '../components/List'
import { useSelector, useDispatch } from 'react-redux';


import {
  getVideosAsync,
  getVideos,
} from '../features/videoSlice';

const Videos = () => {
  const dispatch = useDispatch();
  const videos = useSelector(getVideos)

  useEffect(() => {
    dispatch(getVideosAsync())
  },[])

  return (
    <div>
      <h3>Welcome to Clickview videos</h3>
      <List lists={videos} type="video"/>
    </div>
  );
};

export default Videos;