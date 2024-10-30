const {
  browseCategories,
  browseSingleCategory,
} = require("../controller/categoryController");
const router = require("express").Router();

// Browse several categories
router.get("/categories", browseCategories);

// Browse a single category
router.get("/categories/:id", browseSingleCategory);

module.exports = router;
