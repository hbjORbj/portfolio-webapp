const express = require("express");
const { signUp, login } = require("../controllers/globalController");
const globalRouter = express.Router();

globalRouter.post("/login", login);
globalRouter.post("/signup", signUp);

module.exports = globalRouter;
