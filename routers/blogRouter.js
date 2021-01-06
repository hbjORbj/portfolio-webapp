const express = require("express");
const {
  getBlogs,
  getBlogById,
  getBlogBySlug,
} = require("../controllers/blogController");

const blogRouter = express.Router();

blogRouter.get("/blogs", getBlogs);
blogRouter.get("/blog/:blogId", getBlogById);
blogRouter.get("/blog/:slug", getBlogBySlug);

module.exports = blogRouter;
