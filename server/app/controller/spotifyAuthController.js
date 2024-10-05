const axios = require("axios");
const Token = require("../models/TokenModel");

// login
const login = (req, res) => {
  let scope = "user-read-private user-read-email";
  const authParams = new URLSearchParams({
    response_type: "code",
    client_id: process.env.CLIENT_ID,
    redirect_uri: process.env.CALLBACK,
    scope: scope,
  });
  res.redirect(
    "https://accounts.spotify.com/authorize?" + authParams.toString()
  );
};

// callback
const callBack = async (req, res) => {
  const code = req.query.code || null;
  const authOptions = {
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    data: {
      code: code,
      redirect_uri: process.env.CALLBACK,
      grant_type: "authorization_code",
    },
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        new Buffer.from(
          process.env.CLIENT_ID + ":" + process.env.SECRET
        ).toString("base64"),
    },
  };

  try {
    const response = await axios(authOptions);
    const data = response.data;
    if (data) {
      const token = Token.create({
        accessToken: data.access_token,
        tokenType: data.token_type,
        expiresIn: data.expires_in,
        refreshToken: data.refresh_token,
        scope: data.scope,
      });
    }

    const hourPrior = new Date(Date.now() - 3600 * 1000);
    const deleteAll = await Token.deleteMany({ createdAt: { $lt: hourPrior } });

    res.redirect(process.env.CLIENT_HOME_PAGE);
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = { login, callBack };
