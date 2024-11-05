const axios = require("axios");

// get single episode
const getSingleEpisode = async (req, res) => {
    const accessToken = req.cookies.accessToken;
    const {id} = req.params;

    if (!accessToken) {
        return res.status(401).json({message: "Unauthorized"});
    }

    try {
        const response = await axios.get(
            `https://api.spotify.com/v1/episodes/${id}`,
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

module.exports = {getSingleEpisode};
