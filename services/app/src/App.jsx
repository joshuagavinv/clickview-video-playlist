import './App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router,
  Routes, Route} from "react-router-dom";

import Layout from "./layout/Layout"
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Playlists from "./pages/Playlists";
import VideoPost from "./pages/VideoPost";
import PlaylistPost from "./pages/PlaylistPost";
import { requestVideos, requestPlaylists, requestVideosById, requestPlaylistsById } from './actions';

const mapStateToProps = state => {
  return {
    videos : state.requestVideos.videos,
    isVideoPending: state.requestVideos.isPending,
    videoError: state.requestVideos.error,
    playlists : state.requestPlaylists.playlists,
    isPlaylistPending: state.requestPlaylists.isPending,
    playlistError: state.requestPlaylists.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRequestVideos: () => dispatch(requestVideos()),
    onRequestVideosById: (id) => dispatch(requestVideosById(id)),
    onRequestPlayLists: () => dispatch(requestPlaylists()),
    onRequestPlayListsById: (id) => dispatch(requestPlaylists(id)),
  }
}

class App extends Component {
  constructor() {
    super()
  }

  render() {
    const { videos, playlists, onRequestPlayListsById, onRequestVideosById } = this.props
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="videos" element={<Videos videos={videos}/>} />
              <Route path="playlists" element={<Playlists playlists={playlists} />} />
              <Route exact path="videos/:id" element={<VideoPost reqVideosById={requestVideosById}/>}/>
              <Route exact path="playlists/:id" element={<PlaylistPost reqPlaylistsById={requestPlaylistsById}/>}/>
            </Route>
          </Routes>
        </Router>
      </div>
    )
  }

  componentDidMount() {
    this.props.onRequestVideos();
    this.props.onRequestPlayLists();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
