const { getSingleAlbum } = require("../controller/albumsController");
const router = require("express").Router();

// get several album
router.get("/test", getSingleAlbum);

module.exports = router;
