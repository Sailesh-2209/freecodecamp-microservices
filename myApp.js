var express = require("express");
var app = express();
require("dotenv").config();

console.log("Hello World");

// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
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
