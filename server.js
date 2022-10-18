const express = require("express");
const cors = require("cors");

require("dotenv").config();

const { newRelease } = require("./file");

const app = express();

app.use(cors());
app.use("/audio", express.static("audio"));
app.use("/cover", express.static("cover"));

app.use("/new", (req, res) => {
  res.json(newRelease);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("listening on port", process.env.PORT);
});
