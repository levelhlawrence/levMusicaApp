const axios = require("axios");

const searchResults = async (req, res) => {
  const qurey = req.query.q;
  const type = req.query.type;

  const accessToken = req.cookies.accessToken;

  if (!accessToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/search?q=${qurey}&type=${type}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ message: error.message });
  }
};

module.exports = { searchResults };
