const {getSingleEpisode} = require("../controller/episodesController");
const router = require("express").Router();

// get several album
router.get("/:id", getSingleEpisode);

module.exports = router;
