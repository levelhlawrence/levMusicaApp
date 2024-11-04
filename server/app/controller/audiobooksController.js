const axios = require("axios");

// get single audiobook
const getSingleAudioBook = async (req, res) => {
  res.json({ message: "tracks working" });
};

const getServeralAudioBooks = async (req, res) => {
  const accessToken = req.cookies.accessToken;

  if (!accessToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const response = await axios.get(
      "https://api.spotify.com/v1/audiobooks?ids=18yVqkdbdRvS24c0Ilj2ci%2C1HGw3J3NxZO1TP1BTtVhpZ%2C7iHfbu1YPACw6oZPAFJtqe",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    if (error.status === 401) {
      res.redirect(process.env.CLIENT_HOME_PAGE + "/login");
    } else {
      res
        .status(error.response?.status || 500)
        .json({ message: error.message });
    }
  }
};

module.exports = { getSingleAudioBook, getServeralAudioBooks };
