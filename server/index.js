const { app, port } = require("./app/server");

// Running server
app.listen(port, () => {
  console.log(`App listening on port: ${port}...`);
});
