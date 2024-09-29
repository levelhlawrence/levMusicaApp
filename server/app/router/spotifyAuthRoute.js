const router = require("express").Router();
const { login, callBack } = require("../controller/spotifyAuthController");

// login route
router.get("/login", login);
//callback route
router.get("/callback", callBack);

module.exports = router;
