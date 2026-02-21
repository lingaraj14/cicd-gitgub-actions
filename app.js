const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/api/user_details", (req, res) => {
  res.send({
    id: 1,
    name: "John Doh",
    age: 35,
    env: {
      name: process.env.NAME,
    },
  });
});

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
