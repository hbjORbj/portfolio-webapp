const { Router } = require("express");
const express = require("express");
const { getHome } = require("../controllers/globalController");
const globalRouter = express.Router();

globalRouter.get("/", getHome);

module.exports = globalRouter;
