const axios = require("axios");

// get single album
const getSingleTrack = async (req, res) => {
    const accessToken = req.cookies.accessToken;
    const {id} = req.params;

    if (!accessToken) {
        return res.status(401).json({message: "Unauthorized"});
    }

    try {
        const response = await axios.get(
            `https://api.spotify.com/v1/tracks/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({message: error.message});
    }
};

const getFeaturedTracks = async (req, res) => {
    const accessToken = req.cookies.accessToken;

    if (!accessToken) {
        return res.status(401).json({message: "Unauthorized"});
    }
    try {
        const response = await axios.get(
            `https://api.spotify.com/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({message: error.message});
    }
};

module.exports = {getSingleTrack, getFeaturedTracks};
