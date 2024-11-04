const {
  getSingleAudioBook,
  getServeralAudioBooks,
} = require("../controller/audiobooksController");
const router = require("express").Router();

// get several audiobooks
router.get("/", getServeralAudioBooks);

// get a single audiobook
router.get("/:id", getSingleAudioBook);

module.exports = router;
