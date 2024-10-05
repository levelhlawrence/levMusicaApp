const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const spotifyAuthRouter = require("./router/spotifyAuthRoute");
const getTokenRoute = require("./middleware/tokenMiddle");
const db = require("./db/database");

//middlewares
app.use(cors());
app.use(morgan("dev"));

// mongodb connection
db();

// routes
app.use("/auth", spotifyAuthRouter);
app.use("/token", getTokenRoute);

module.exports = app;
