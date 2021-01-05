require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("HOME");
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`🚀 Server ready at http://localhost:${PORT}`);
});
