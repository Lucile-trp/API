const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  res.send("Hello World!");
});

app.put("/", (req, res) => {
  res.send("Hello World!");
});

app.delete("/:id", (req, res) => {
  res.json({
    id: req.params.id,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});