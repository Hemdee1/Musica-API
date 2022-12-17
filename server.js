const express = require("express");
const cors = require("cors");

require("dotenv").config();

const { books, author } = require("./file");

const app = express();

app.use(cors());
// app.use("/audio", express.static("audio"));
// app.use("/cover", express.static("cover"));

app.get("/", (req, res) => {
  res.json({
    msg: "There is no data on this route, try /books or /author",
  });
});

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/author", (req, res) => {
  res.json(author);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("listening on port", process.env.PORT);
});
