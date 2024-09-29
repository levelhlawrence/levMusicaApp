const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const router = express.Router();
const spotifyAuthRouter = require("./router/spotifyAuthRoute");
const getTokenRoute = require("./middleware/tokenMiddle");
const db = require("./db/database");

const port = process.env.PORT || 3001;

//middlewares
app.use(router);
app.use(cors());
morgan("dev");

// db connection
db();

// routes
router.use("/auth", spotifyAuthRouter);
router.use("/token", getTokenRoute);

module.exports = { app, port, router };
