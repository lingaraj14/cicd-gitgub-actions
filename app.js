const express = require("express");
const app = express();
PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/api/user_details", (req, res) => {
  res.send({
    id: 1,
    name: "John Doh",
    age: 35,
  });
});

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
