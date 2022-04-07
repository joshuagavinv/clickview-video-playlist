
import { useParams } from "react-router-dom";
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import {
  getVideoByIdAsync,
  getActiveVideo,
} from '../features/videoSlice';

const VideoPost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const video = useSelector(getActiveVideo)

  useEffect(() => {
    dispatch(getVideoByIdAsync(id))
  },[id])

  const {name, duration, description, dateCreated, thumbnail} = video;
  return (
    <div>
      <img className="video__thumbnail video__thumbnail--single" alt={description} src={thumbnail}></img>
      <div>
        <h2 className="video__heading">{name}</h2>
        <p>id: {id}</p>
        <p>duration: {duration}</p>
        <p>date created: {dateCreated}</p>
        <p>description: {description}</p>
      </div>
    </div>
  );
};

export default VideoPost;