const express = require("express");
const { db, port } = require("./config/config.js");
const app = express();

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
  db();
});
