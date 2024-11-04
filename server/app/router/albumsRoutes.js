const { getSingleAlbum } = require("../controller/albumsController");
const router = require("express").Router();

// get a single album
// Album route
/**
 * GET /albums/:id
 * @summary Redirects to Spotify Authorization
 * @description Redirect the user to Spotify's authorization page to get an access code for the 'user-read-private' and 'user-read-email' scopes.
 * @tags security
 * @param {string} id.path.required - Credentials
 */
router.get("/:id", getSingleAlbum);

module.exports = router;
