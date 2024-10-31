const { getSingleTrack } = require("../controller/trackController");
const router = require("express").Router();

// get a single track
router.get("/:id", getSingleTrack);

module.exports = router;
