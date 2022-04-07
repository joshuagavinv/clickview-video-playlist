import './App.css';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Layout from "./layout/Layout"
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Playlists from "./pages/Playlists";
// import VideoPost from "./pages/VideoPost";
// import PlaylistPost from "./pages/PlaylistPost";


const App = () => {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="videos" element={<Videos/>} />
              <Route path="playlists" element={<Playlists />} />
              {/* <Route exact path="videos/:id" element={<VideoPost reqVideosById={requestVideosById}/>}/>
              <Route exact path="playlists/:id" element={<PlaylistPost reqPlaylistsById={requestPlaylistsById}/>}/> */}
            </Route>
          </Routes>
        </Router>
      </div>
    )
}

export default App;
