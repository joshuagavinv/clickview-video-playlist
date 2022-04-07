module.exports = router => {
  const data = require("../controllers/playlists");

  router.get("/playlists", data.findAll);
  router.get("/playlists/:id", data.findOne);
  router.put("/playlists", data.addVideo);

}