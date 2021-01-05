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
    return res.status(400).json({ error: "Could not find portfolio." });
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

exports.updatePortfolio = async (req, res) => {
  const data = req.body;
  const { portfolioId } = req.params;
  try {
    const updatedPortfolio = await Portfolio.findOneAndUpdate(
      { _id: portfolioId },
      data,
      { new: true }
    );
    return res.json(updatedPortfolio);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "Could not update portfolio." });
  }
};

exports.deletePortfolio = async (req, res) => {
  const { portfolioId } = req.params;
  await Portfolio.deleteOne({ _id: portfolioId }, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: "Could not delete portfolio." });
    } else {
      return res.json({ message: "Portfolio has been deleted successfully." });
    }
  });
};
