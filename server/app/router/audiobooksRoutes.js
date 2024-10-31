const { getSingleAudioBook } = require("../controller/audiobooksController");
const router = require("express").Router();

// get several album
router.get("/:id", getSingleAudioBook);

module.exports = router;
