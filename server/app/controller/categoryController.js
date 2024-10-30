const axios = require("axios");

// browse all categories
const browseCategories = async (req, res) => {
  const accessToken = req.cookies.accessToken;

  if (!accessToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const response = await axios.get(
      "https://api.spotify.com/v1/browse/categories",
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

// browse single category
const browseSingleCategory = async (req, res) => {
  const accessToken = req.cookies.accessToken;
  const { id } = req.params;

  if (!accessToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/browse/categories/${id}/playlists`,
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

module.exports = { browseCategories, browseSingleCategory };
