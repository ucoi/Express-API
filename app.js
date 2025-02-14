const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>Home Page<h1/><a href="/products">products</a>');
});
app.get("/products", (req, res) => {
  res.json(products.map(({ id, name, image }) => ({ id, name, image })));
});

app.get("/products/:productID", (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find((p) => p.id === Number(productID));
  if (!singleProduct) {
    return res.status(404).send("Product does not exist");
  }
  res.json(singleProduct);
});

app.get("/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("Hello world");
});

app.get("/v1/query", (req, res) => {
  //console.log(req.query);
  const { search, limit } = req.query;
  let sortedProdutcs = [...products];
  if (search) {
    sortedProdutcs = sortedProdutcs.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProdutcs = sortedProdutcs.slice(0, Number(limit));
  }
  if (sortedProdutcs.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }
  return res.status(200).json(sortedProdutcs);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
