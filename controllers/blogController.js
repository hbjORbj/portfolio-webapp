const slugify = require("slugify");
const uniqueSlug = require("unique-slug");
const mongoose = require("mongoose");
const Blog = require("../models/Blog");

exports.getBlogs = async (req, res) => {
  const blogs = await Blog.find({});
  return res.json(blogs);
};

exports.getBlogById = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blog = await Blog.findById(blogId);
    return res.json(blog);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "Could not find blog." });
  }
};

exports.getBlogBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const blog = await Blog.findOne({ slug });
    return res.json(blog);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "Could not find blog." });
  }
};
