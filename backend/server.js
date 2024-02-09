const express = require("express");
const db = require("./config/connection");

const PORT = 5000;
const app = express();
app.get("/", (req, res) => {
  console.log("first");
  res.send("hi");
});
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`running on port ${PORT}!`);
  });
});
