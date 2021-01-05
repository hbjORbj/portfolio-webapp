const express = require("express");
const { signUp, login } = require("../controllers/globalController");
const globalRouter = express.Router();

globalRouter.get("/login", login);
globalRouter.get("/signup", signUp);

module.exports = globalRouter;
