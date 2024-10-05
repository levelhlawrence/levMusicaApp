const app = require("./app/server");
//PORT
const port = process.env.PORT || 3001;

const swagger = require("express-jsdoc-swagger");

// Live Documentation
swagger(app)({
  info: {
    title: "LevMusica",
    version: "1.0.0",
    description: "Music app inspired by the Spotify API .",
  },
  baseDir: "./app/router",
  swaggerUIPath: "/",
});

// Running server
app.listen(port, () => {
  console.log(`App listening on port: ${port}...`);
});
