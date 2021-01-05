const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const globalRouter = require("./routers/globalRouter");
const app = express();

// Routes
app.use("/api", globalRouter);

// DB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("😃 DB Connected"));
  
// Middlewares
app.use(morgan("dev"));

// Server
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("HOME");
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`🚀 Server ready at http://localhost:${PORT}`);
});
