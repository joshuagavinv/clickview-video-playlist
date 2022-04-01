module.exports = app => {
  const videos = require("./videos");
  const playlists = require("./playlists");
  let router = require("express").Router();

  playlists(router);
  videos(router);

  app.use('/api', router);
};