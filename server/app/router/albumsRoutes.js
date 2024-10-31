const { getSingleAlbum } = require("../controller/albumsController");
const router = require("express").Router();

// get several album
router.get("/:id", getSingleAlbum);

module.exports = router;
