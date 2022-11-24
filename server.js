const express = require("express");
const cors = require("cors");

require("dotenv").config();

// const { newRelease, popular, playlists } = require("./file");
const { newRelease, popular, playlists } = require("./offlineFile");

const app = express();

app.use(cors());
app.use("/audio", express.static("audio"));
app.use("/cover", express.static("cover"));

app.get("/", (req, res) => {
  res.json({
    msg: "There is no data on this route, try /new, /popular or /playlist",
  });
});

app.get("/new", (req, res) => {
  res.json(newRelease);
});

app.get("/popular", (req, res) => {
  res.json(popular);
});

app.get("/playlist", (req, res) => {
  res.json(playlists);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("listening on port", process.env.PORT);
});
