const Token = require("../models/TokenModel");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const token = await Token.find();

  res.status(200).json({ tokens: token });
});

module.exports = router;
