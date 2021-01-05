const express = require("express");
const {
  getPortfolios,
  getPortfolioById,
  createPortfolio,
} = require("../controllers/portfolioController");

const portfolioRouter = express.Router();

// POST Method
portfolioRouter.post("/portfolio/new", createPortfolio);

// GET Method
portfolioRouter.get("/", getPortfolios);
portfolioRouter.get("/portfolio/:portfolioId", getPortfolioById);

module.exports = portfolioRouter;
