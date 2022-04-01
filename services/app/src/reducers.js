import { 
  REQUEST_VIDEOS_FAILED, 
  REQUEST_VIDEOS_PENDING, 
  REQUEST_VIDEOS_SUCCESS,
  REQUEST_PLAYLISTS_FAILED, 
  REQUEST_PLAYLISTS_PENDING, 
  REQUEST_PLAYLISTS_SUCCESS 
} from "./constants"

const initialStateVideos= {
  'isPending' : false,
  'videos' : [],
  'error' : ''
}

export const requestVideos = (state=initialStateVideos, action={}) => {
  switch(action.type) {
    case REQUEST_VIDEOS_PENDING:
      return {...state, ...{'isPending' : true}}
    case REQUEST_VIDEOS_SUCCESS:
      return {...state, ...{'isPending' : false, 'videos': action.payload}}
    case REQUEST_VIDEOS_FAILED:
      return {...state, ...{'isPending' : false, 'error': action.payload}}
    default:
      return state
  }
}

const initialStatePlaylists= {
  'isPending' : false,
  'playlists' : [],
  'error' : ''
}

export const requestPlaylists = (state=initialStatePlaylists, action={}) => {
  switch(action.type) {
    case REQUEST_PLAYLISTS_PENDING:
      return {...state, ...{'isPending' : true}}
    case REQUEST_PLAYLISTS_SUCCESS:
      return {...state, ...{'isPending' : false, 'playlists': action.payload}}
    case REQUEST_PLAYLISTS_FAILED:
      return {...state, ...{'isPending' : false, 'error': action.payload}}
    default:
      return state
  }
}