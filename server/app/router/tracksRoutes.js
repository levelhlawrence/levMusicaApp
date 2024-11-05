const {
  getSingleTrack,
  getFeaturedTracks,
} = require("../controller/trackController");
const router = require("express").Router();

// get a single track
router.get("/:id", getSingleTrack);

router.get("/", getFeaturedTracks);

module.exports = router;
