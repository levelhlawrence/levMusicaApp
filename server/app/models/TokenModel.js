const mongoose = require("mongoose");

const TokenSchema = new mongoose.Schema(
  {
    accessToken: { type: String, required: true },
    tokenType: String,
    expiresIn: Number,
    refreshToken: String,
    scope: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Token", TokenSchema);
