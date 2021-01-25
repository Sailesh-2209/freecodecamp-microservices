var express = require("express");
var app = express();

console.log("Hello World");

// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });

process.env.MESSAGE_STYLE = uppercase;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/", express.static(__dirname + "/public"));
app.use("/json", (req, res) => {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === uppercase) {
    message = "HELLO JSON";
  }
  res.json({
    message: message,
  });
});

module.exports = app;
