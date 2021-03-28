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

app.use("/", express.static(__dirname + "/public"));
app.use("/json", (req, res) => {
  res.json(() => {
    if (process.env.MESSAGE_STYLE === "uppercase") {
      return {
        message: "Hello World".toUpperCase(),
      };
    } else {
      return {
        message: "Hello World",
      };
    }
  });
  res.json({
    message: message,
  });
});

module.exports = app;
