const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const router = express.Router();
const spotifyAuthRouter = require("./router/spotifyAuthRoute");
const getTokenRoute = require("./middleware/tokenMiddle");
const db = require("./db/database");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const port = process.env.PORT || 3001;

//middlewares
app.use(router);
app.use(cors());
morgan("dev");

// mongodb connection
db();

// routes
router.use("/auth", spotifyAuthRouter);
router.use("/token", getTokenRoute);
router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(swaggerDocument));

// default route
router.use("/", (req, res) => {
  res.json({ status: res.statusCode, method: req.method });
});

module.exports = { app, port };
