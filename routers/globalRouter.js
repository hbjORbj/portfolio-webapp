const express = require("express");
const { getPortfolios } = require("../controllers/globalController");
const globalRouter = express.Router();

globalRouter.get("/", getPortfolios);

module.exports = globalRouter;
