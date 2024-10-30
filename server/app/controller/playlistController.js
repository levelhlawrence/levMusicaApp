const axios = require("axios");

// get single playlist
const getSinglePlaylist = async (req, res) => {
  const accessToken = req.cookies.accessToken;
  const { id } = req.params;

  if (!accessToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/playlists/${id}`,
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

// get tracks on playlist
const getTracksOnPlaylist = async (req, res) => {
  const { id } = req.params;
  console.log("working playlist route", id);
};

module.exports = { getSinglePlaylist, getTracksOnPlaylist };
