const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const globalRouter = require("./routers/globalRouter");
const portfolioRouter = require("./routers/portfolioRouter");
const app = express();

// DB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("😃 DB Connected"));

mongoose.connection.on("error", (error) => {
  console.log(`DB error: ${error}`);
});

// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());

// Routes
app.use("/api", globalRouter);
app.use("/api", portfolioRouter);

// Server
const PORT = process.env.PORT || 4000;

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`🚀 Server ready at http://localhost:${PORT}`);
});
