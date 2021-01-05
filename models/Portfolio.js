const mongoose = require("mongoose");

const PortfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startDate: {
    type: String, // need to change to Date
    required: true,
  },
  endDate: {
    type: String, // need to change to Date
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Portfolio", PortfolioSchema);
