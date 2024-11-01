const { getSingleShow } = require("../controller/showsController");
const router = require("express").Router();

// Shows route
/**
 * GET /shows/:id
 * @summary Returns an object of shows
 * @description Returns a JSON object from the spotify webapi
 * @tags security
 * @param {AuthCredentials} request.body.required - Credentials
 */
// get single show
router.get("/:id", getSingleShow);

module.exports = router;
