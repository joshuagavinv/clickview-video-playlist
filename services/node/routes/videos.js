module.exports = router => {
  const data = require("../controllers/videos");

  router.get("/videos", data.findAll);
  router.get("/videos/:id", data.findOne);

}