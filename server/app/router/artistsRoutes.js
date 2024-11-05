const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ message: "artist route up" });
});

router.get("/:id", (req, res) => {
  res.json({ message: "artist route up" });
});

module.exports = router;
