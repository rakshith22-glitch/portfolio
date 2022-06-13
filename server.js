const path = require("path");
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, "../rakshithpfolio/public");
app.use(express.static(publicPath));

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join("build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});
app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log("Server is up!", port);
});
