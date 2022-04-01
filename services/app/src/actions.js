import { 
  REQUEST_VIDEOS_FAILED, 
  REQUEST_VIDEOS_PENDING, 
  REQUEST_VIDEOS_SUCCESS,
  REQUEST_PLAYLISTS_FAILED, 
  REQUEST_PLAYLISTS_PENDING, 
  REQUEST_PLAYLISTS_SUCCESS 
} from "./constants"

export const requestVideos = () => (dispatch) => {
  dispatch({type: REQUEST_VIDEOS_PENDING})
  fetch(`${process.env.REACT_APP_API_URL}/api/videos`)
  .then(res => res.json())
  .then(data => dispatch({type: REQUEST_VIDEOS_SUCCESS, payload: data}))
  .catch(error => dispatch({type: REQUEST_VIDEOS_FAILED, payload: error}))
}

export const requestPlaylists = () => (dispatch) => {
  dispatch({type: REQUEST_PLAYLISTS_PENDING})
  fetch(`${process.env.REACT_APP_API_URL}/api/playlists`)
  .then(res => res.json())
  .then(data => dispatch({type: REQUEST_PLAYLISTS_SUCCESS, payload: data}))
  .catch(error => dispatch({type: REQUEST_PLAYLISTS_FAILED, payload: error}))
}

