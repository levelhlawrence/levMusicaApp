const router = require("express").Router();
const {
  login,
  callBack,
  tokenChecker,
} = require("../controller/spotifyAuthController");

// login route
/**
 * GET /auth/login
 * @summary Redirects to Spotify Authorization
 * @description Redirect the user to Spotify's authorization page to get an access code for the 'user-read-private' and 'user-read-email' scopes.
 * @tags security
 * @param {AuthCredentials} request.body.required - Credentials
 */

router.get("/login", login);
//callback route

/**
 * GET /auth/callback
 */
router.get("/callback", callBack);

router.get("/test", tokenChecker);

module.exports = router;
