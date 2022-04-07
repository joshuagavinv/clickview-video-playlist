import { useParams, Link } from "react-router-dom";
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getPlaylistByIdAsync,
  getActivePlaylist,
  getVideoIds
} from '../features/playlistSlice';

const PlayListPost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const playlist = useSelector(getActivePlaylist)
  const videoIds = useSelector(getVideoIds)

  useEffect(() => {
    dispatch(getPlaylistByIdAsync(id))
  },[id])

  const {name, description, dateCreated} = playlist;
  return (
    <div>
      <h2>{name}</h2>
      <h2>{description}</h2>
      <p>id: {id}</p>
      <p>date created: {dateCreated}</p>
      { videoIds != null &&
      <div className="playlist__videos">
        { videoIds.map((videoId) => {
            return <Link key={videoId} to={{pathname: `/videos/${videoId}`}}>
              {videoId}
            </Link>
          })
        }
      </div>
      }
    </div>
  );
};

export default PlayListPost;