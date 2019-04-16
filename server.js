const express = require("express");

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () =>
  console.log("Express server is running on localhost:8000")
);
