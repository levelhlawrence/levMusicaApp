const {
  getSinglePlaylist,
  getTracksOnPlaylist,
} = require("../controller/playlistController");
const router = require("express").Router();

// Browse several categories
router.get("/:id", getSinglePlaylist);

// Browse a single category
router.get("/:id/tracks", getTracksOnPlaylist);

module.exports = router;
