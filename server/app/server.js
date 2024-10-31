const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const db = require("./db/database");
const cookieParser = require("cookie-parser");
// imported routes
const spotifyAuthRouter = require("./router/spotifyAuthRoute");
const getTokenRoute = require("./middleware/tokenMiddle");
// spotify api routes
const categoryRoutes = require("./router/categoryRoute");
const playlistRoutes = require("./router/playlistRoutes");
const searchRoutes = require("./router/searchRoutes");
const albumsRoutes = require("./router/albumsRoutes");
const tracksRoutes = require("./router/tracksRoutes");
const showsRoutes = require("./router/showsRoutes");
const episodesRoutes = require("./router/episodesRoutes");
const audiobooksRoutes = require("./router/audiobooksRoutes");

//middlewares
app.use(
  cors({
    origin: process.env.CLIENT_HOME_PAGE,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(morgan("dev"));

// mongodb connection
db();

// routes
app.use("/auth", spotifyAuthRouter);
app.use("/token", getTokenRoute);
// spotify api
app.use("/browse", categoryRoutes);
app.use("/playlist", playlistRoutes);
app.use("/search", searchRoutes);
app.use("/albums", albumsRoutes);
app.use("/tracks", tracksRoutes);
// app.use("/shows", showsRoutes);
// app.use("/episodes", episodesRoutes);
// app.use("/audiobooks ", audiobooksRoutes);

module.exports = app;
