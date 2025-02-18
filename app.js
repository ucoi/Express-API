const express = require("express");
const app = express();
const authorize = require("./authorize");
const logger = require("./logger");
// req = > middleware => res

app.use([logger, authorize]);

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/about", (req, res) => {
  res.send("Hello aboout");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/api/items", logger, (req, res) => {
  res.send("items");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
