const express = require("express");
const cors = require("cors");

require("dotenv").config();

// const { author } = require("./file");
const bodyParser = require('body-parser');
const app = express();
//Here we are configuring express to use body-parser as    middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const Data = {
  Students: [
    {
      id: 1,
      name: 'jack sparrow',
      age: 19,
      email: 'jack@gmail.com',
      level: 100,
      department: 'computer science',
      courses: ['csc101', 'bio101', 'chm102', 'ges104', 'ams101'],
      password: 'attp102'
    },
    {
      id: 2,
      name: 'mike angelo',
      age: 19,
      email: 'mike@gmail.com',
      level: 300,
      department: 'info Tech',
      courses: ['itp301', 'bio301', 'mee301', 'ges301', 'ams301'],
      password: 'kpoi189'
    },
  ],
  Levels: [
    {
      id: 100,
      level: 100,
      Students: [{id: 1, name: 'jack sparrow', department: 'comuter science'}, {id: 2, name: 'mike angelo', department: 'comuter science'}],
      available_course: ['ams 101', 'csc101', 'bgt101', 'acc102', 'ges102', 'phy101', 'bio101', 'mee101']
    },
    {
      id: 200,
      level: 200,
      Students: [],
      available_course: ['ams 201', 'csc201', 'bgt201', 'acc202', 'ges202', 'phy201', 'bio101', 'mee201']
    },
    {
      id: 300,
      level: 300,
      Students: [],
      available_course: ['ams 301', 'csc301', 'bgt311', 'acc312', 'ges301', 'itp301', 'bio301', 'mee301']
    },
    {
      id: 400,
      level: 400,
      Students: [],
      available_course: ['csc 407', 'csc411', 'bgt401', 'acc402', 'ges402', 'phy401', 'bio401', 'itp411']
    },
    {
      id: 500,
      level: 500,
      Students: [],
      available_course: ['csc 507', 'csc511', 'bgt501', 'acc502', 'ges502', 'phy501', 'bio501', 'itp511']
    }
  ]
}

// let Students = [

// ]

// let Levels = [

// ]

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
    msg: "There is no data on this route, try /data or /author",
  });
});

app.get("/data", (req, res) => {
  console.log('Students data fetched')
  res.json(Data);
  res.send(res.statusMessage);
});

app.post('/data', (req, res) => {
  //  console.log(req.body)
    const newStudent = req.body
    const currentLevel = Data.Levels.filter(item => item.id == newStudent.level)

    Data.Students.push(newStudent)
    currentLevel[0].Students.push({id: newStudent.id, name: newStudent.name, department: newStudent.department})

    console.log(`Book ${newStudent.title} added to database`)
    res.send(res.statusMessage)

    return;
});

// app.delete('/books/:id', (req, res) => {
//   console.log(req.params)
//   books = books.filter((bookItem) => bookItem.id !== req.params.id);

// //  res.end('book Deleted')
//   res.send(res.statusMessage)
// })

// app.patch('/books/:id', (req, res) => {
//   const bookItem = books.find((book) => book.id === req.params.id);
    
//   bookItem.title = req.body.title;
//   bookItem.summary = req.body.summary;
//   bookItem.price = req.body.price;

// //  res.end('book Updated')
//   res.send(res.statusMessage)
// })


app.listen(process.env.PORT || 4000, () => {
  console.log(`listening on port ${process.env.PORT} 100`);
});
