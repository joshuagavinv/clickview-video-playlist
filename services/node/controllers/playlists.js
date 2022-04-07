const playlists = require("../models/playlists.js");
const videos = require("../models/videos.js");

exports.findAll = (req, res) => {
  res.send(playlists)
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  let item = null

  for ( const current of playlists) {
    if(current.id === parseInt(id)) item = current
  }

  if(item != null) res.send(item)
  else {
    res.status(500).send({
      message:
        "Cannot find playlist."
    });
  }
};

exports.addVideo = (req, res) => {
  // Validate request
  const id = req.body.id
  const playListId = req.body.playlistId
  if (!id || !playListId) {
    res.status(400).send({
      error: "Could not decode request: JSON parsing failed"
    });
    return;
  }

  //if video dont exist
  const video = videos.filter(item => item.id == id)
  if(!video) {
    res.status(500).send({
      error: "video not found"
    });
    return;
  }

  // if playlist don't exist
  const playlist = playlists.filter(item => item.id == playListId)
  if(!playlist) {
    res.status(500).send({
      error: "playlist not found",
    });
    return;
  }
  //if video already in array
  const videoIds = playlist[0].videoIds
  const videoInList = videoIds.includes(id)

  if(videoInList) {
    res.status(400).send({
      error: "video already in list"
    });
  }
  try {
    const index = playlists.findIndex((item) => item.id == playListId)
    playlists[index].videoIds.push(id)
    res.send({'result' : true})
  } catch(e) {
    res.status(500).send({
      error: e.message || "Some error occurred while adding playlist."
    });
  }

  res.send(playlists)
};

exports.removeVideo = (req, res) => {
  // Validate request
  const id = req.body.id
  const playListId = req.body.playlistId
  if (!id || !playListId) {
    res.status(400).send({
      error: "Could not decode request: JSON parsing failed"
    });
    return;
  }

  //if video dont exist
  const video = videos.filter(item => item.id == id)
  if(!video) {
    res.status(500).send({
      error: "video not found"
    });
    return;
  }

  // if playlist don't exist
  const playlist = playlists.filter(item => item.id == playListId)
  if(!playlist) {
    res.status(500).send({
      error: "playlist not found",
    });
    return;
  }
  //if video not in array
  const videoIds = playlist[0].videoIds
  const videoInList = videoIds.includes(id)

  if(!videoInList) {
    res.status(400).send({
      error: "video not in list"
    });
  }
  try {
    const index = playlists.findIndex((item) => item.id == playListId)
    playlists[index].videoIds = playlists[index].videoIds.filter((item)=> item.id != id)
    res.send({'result' : true})
  } catch(e) {
    res.status(500).send({
      error: e.message || "Some error occurred while removing video from playlist."
    });
  }

  res.send(playlists)
};