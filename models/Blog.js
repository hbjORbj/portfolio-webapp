const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  slug: {
    type: String,
    unique: true,
    sparse: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "draft",
    enum: ["draft", "published", "deleted"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: Date,
});

module.exports = mongoose.model("Blog", BlogSchema);
