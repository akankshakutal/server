const Express = require("express");

const app = Express();
const port = process.env.PORT || 8000;

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.use(Express.static("hello-world/build"));

app.listen(port, () =>
  console.log("Express server is running on localhost:8000")
);
