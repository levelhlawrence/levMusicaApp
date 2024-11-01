const axios = require("axios");

// get single audiobook
const getSingleAudioBook = async (req, res) => {
  res.json({ message: "tracks working" });
};

module.exports = { getSingleAudioBook };
