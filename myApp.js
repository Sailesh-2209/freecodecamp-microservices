var express = require("express");
var app = express();

console.log("Hello World");

// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });

process.env.MESSAGE_STYLE=uppercase;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/", express.static(__dirname + "/public"));
app.use("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json("Hello json".toUpperCase);
  } else {
    res.json("Hello json");
  }
});

module.exports = app;
