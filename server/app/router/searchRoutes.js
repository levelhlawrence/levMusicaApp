const router = require("express").Router();
const { searchResults } = require("../controller/searchController");

router.get("/", searchResults);

module.exports = router;
