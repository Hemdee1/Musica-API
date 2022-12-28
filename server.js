const express = require("express");
const cors = require("cors");

require("dotenv").config();

const { author } = require("./file");
const bodyParser = require('body-parser');
const app = express();

let books = [{
  userId: 1,
  id: 1,
  title: "How to be Rich!!",
  summary: "This book talks about what is the main essense of making bread because bread yeahh is very good your health. (CAN'T BE DELETED/EDITED!)",
  price: 200,
},
{
  userId: 3,
  id: 3,
  title: "Binance Futures Test",
  summary: "Learn how to use binance futures platform and how to trade and make profits daily. at a 30% refund on first 30 days. (CAN'T BE DELETED/EDITED!)",
  price: 100
},
{
  userId: 2,
  id: 4,
  title: "Binance Trading ",
  summary: "Learn how to use binance futures platform and how to trade and make profits daily. at a 30% refund on first 30 days. (CAN'T BE DELETED/EDITED!)",
  price: 100
},
{
  id: 16,
  userId: 4,
  title: "A tale of 2 Goats",
  summary: "A tale of 2 goats, A tale of style and pizzaz of 2 men. One skilled in the art of Goal scoring, the other skilled in the art of Playing Football. There is only One Goat. A tale of 2 Goats. (CAN'T BE DELETED/EDITED!)",
  price: 200
},
{
  id: 10,
  userId: 4,
  title: "A day in a life",
  summary: "A day in a life let's see if you really trap, turn off the autotunes let's here you really rap. haha send a location, i'm speeding 20 bags on aj's (CAN'T BE DELETED/EDITED!)",
  price: 20
},
{
  id: 2,
  userId: 2,
  title: "A Tale of Will Smith",
  summary: "keep my wife's name out yo *Beep* MOUTH!!! (CAN'T BE DELETED/EDITED!)",
  price: 3000
},
]

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
// app.use("/audio", express.static("audio"));
// app.use("/cover", express.static("cover"));

const setStatus = (req, res, next) => {
  if (operationInProgress) {
    res.statusMessage = 'pending'
  } else {
    res.statusMessage = 'fulfilled'
  }
  next()
}

app.get("/", (req, res) => {
  res.json({
    msg: "There is no data on this route, try /books or /author",
  });
});

app.get("/books", (req, res) => {
  console.log('books fetched')
  res.json(books);
});

app.get("/author", (req, res) => {
  res.json(author);
});

app.delete('/books/:id', (req, res) => {
  console.log(req.params)
  books = books.filter((bookItem) => bookItem.id !== req.params.id);

//  res.end('book Deleted')
  res.send(res.statusMessage)
})

app.patch('/books/:id', (req, res) => {
  const bookItem = books.find((book) => book.id === req.params.id);
    
  bookItem.title = req.body.title;
  bookItem.summary = req.body.summary;
  bookItem.price = req.body.price;

//  res.end('book Updated')
  res.send(res.statusMessage)
})

app.post('/books', (req, res) => {
//  console.log(req.body)
  const newBook = req.body
  books.push(newBook)

  console.log(`Book ${newBook.title} added to database`)
  res.send(res.statusMessage)
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`listening on port ${process.env.PORT} 100`);
});
