const Portfolio = require("../models/Portfolio");

exports.getPortfolios = async (req, res) => {
  const portfolios = await Portfolio.find({});
  return res.json(portfolios);
};

exports.getPortfolioById = async (req, res) => {
  try {
    const { id } = req.params;
    const portfolio = await Portfolio.findById(id);
    return res.json(portfolio);
  } catch (error) {
    return res.status(400).json({ error: "Can't find portfolio" });
  }
};
