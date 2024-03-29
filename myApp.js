var express = require("express");
var bodyParser = require("body-parser");
var app = express();
require("dotenv").config();

console.log("Hello World");

// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res, next) => {
    res.json({
      time: req.time,
    });
    next();
  }
);

app.get("/:word/echo", (req, res, next) => {
  let word = req.params.word;
  res.json({
    echo: word,
  });
  next();
});

// app.get("/name", (req, res, next) => {})
app
  .route("/name")
  .get((req, res, next) => {
    let response = req.query["first"] + " " + req.query["last"];
    res.json({
      name: response,
    });
    next();
  })
  .post((req, res, next) => {
    let response = req.body["first"] + " " + req.body["last"];
    res.json({
      name: response,
    });
    next();
  });

app.use("/", express.static(__dirname + "/public"));
app.use("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({
      message: "Hello json".toUpperCase(),
    });
  } else {
    res.json({
      message: "Hello json",
    });
  }
});

module.exports = app;
