import path from "path";
import express from "express";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, "./portfolio/public");

console.log(publicPath)
app.use(express.static(publicPath));

if (process.env.NODE_ENV !== "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "public")));
  // Handle React routing, return all requests to React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });
}

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, (err) => {
  if (err) return console.error(err);
  console.log("Server is up!", port);
});
