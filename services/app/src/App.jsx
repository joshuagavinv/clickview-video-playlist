import './App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router,
  Routes, Route} from "react-router-dom";

import Layout from "./layout/Layout"
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Playlists from "./pages/Playlists";
import { requestVideos, requestPlaylists } from './actions';

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
    onRequestPlayLists: () => dispatch(requestPlaylists())
  }
}

class App extends Component {
  constructor() {
    super()
  }

  render() {
    const { videos, playlists } = this.props
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="videos" element={<Videos videos={videos}/>} />
              <Route path="playlists" element={<Playlists playlists={playlists} />} />
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
