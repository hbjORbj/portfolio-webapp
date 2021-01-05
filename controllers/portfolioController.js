const Portfolio = require("../models/Portfolio");

exports.getPortfolios = async (req, res) => {
  const portfolios = await Portfolio.find({});
  return res.json(portfolios);
};

exports.getPortfolioById = async (req, res) => {
  try {
    const { portfolioId } = req.params;
    const portfolio = await Portfolio.findById(portfolioId);
    return res.json(portfolio);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "Can't find portfolio" });
  }
};

exports.createPortfolio = (req, res) => {
  const data = req.body;
  const portfolio = new Portfolio(data);
  portfolio.save((err, result) => {
    if (err) {
      return res.status(400).json({ error: err });
    } else {
      return res.json(result);
    }
  });
};
