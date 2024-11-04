const {
  getSingleAudioBook,
  getServeralAudioBooks,
} = require("../controller/audiobooksController");
const router = require("express").Router();

// get several album
router.get("/", getServeralAudioBooks);
router.get("/:id", getSingleAudioBook);

module.exports = router;
