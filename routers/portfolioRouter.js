const express = require("express");
const {
  getPortfolios,
  getPortfolioById,
} = require("../controllers/portfolioController");
const portfolioRouter = express.Router();

portfolioRouter.get("/", getPortfolios);
portfolioRouter.get("/portfolio/:portfolioId", getPortfolioById);

module.exports = portfolioRouter;
