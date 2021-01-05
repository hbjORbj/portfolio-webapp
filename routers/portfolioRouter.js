const express = require("express");
const { getPortfolios } = require("../controllers/portfolioController");
const portfolioRouter = express.Router();

portfolioRouter.get("/", getPortfolios);

module.exports = portfolioRouter;
