const { app, port, router } = require("./app/server");

// default route
router.use("/", (req, res) => {
  res.json({ status: res.statusCode, method: req.method });
});

// Running server
app.listen(port, () => {
  console.log(`App listening on port: ${port}...`);
});
