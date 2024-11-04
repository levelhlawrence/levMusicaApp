const { getUser, getRecentlyPlayed } = require("../controller/userController");
const router = require("express").Router();

router.get("/", getUser);

router.get("/recently-played", getRecentlyPlayed);
module.exports = router;
