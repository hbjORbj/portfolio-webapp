const express = require("express");
const { requireLogin } = require("../controllers/auth");
const {
  getPortfolios,
  getPortfolioById,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
} = require("../controllers/portfolioController");

const portfolioRouter = express.Router();

// GET Method
portfolioRouter.get("/", getPortfolios);
portfolioRouter.get("/portfolio/:portfolioId", getPortfolioById);

// POST Method
portfolioRouter.post("/portfolio/new", requireLogin, createPortfolio);

// PUT method
portfolioRouter.put("/portfolio/:portfolioId", requireLogin, updatePortfolio);

// DELETE method
portfolioRouter.delete(
  "/portfolio/:portfolioId",
  requireLogin,
  deletePortfolio
);

module.exports = portfolioRouter;
