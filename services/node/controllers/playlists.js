const playlists = require("../models/playlists.js");

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