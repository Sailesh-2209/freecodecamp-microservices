var express = require("express");
var app = express();
require("dotenv").config();

console.log("Hello World");

// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });

let messageStyle = process.env.MESSAGE_STYLE;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/", express.static(__dirname + "/public"));
app.use("/json", (req, res) => {
  if (messageStyle == "uppercase") {
    res.json({
      message: "Hello World".toUpperCase(),
    });
  } else {
    res.json({
      message: "Hello World",
    });
  }
});

module.exports = app;
