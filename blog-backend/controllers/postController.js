const mongoose = require("mongoose");
const postModel = require("../models/postModel");

//Create new post
const createNewPost = async (req, res) => {
  const { imageUrl, title, desc, category } = req.body;

  if (!title || !desc) {
    return res.status(400).json({ error: "all fields are required" });
  }

  if (category.toLowerCase() !== "tech" && category.toLowerCase() !== "news") {
    return res.status(400).json({ error: "category should be tech or news" });
  }

  try {
    const newPost = await postModel.create({
      imageUrl,
      title,
      desc,
      category,
    });
    res.status(200).json(newPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Get all posts
const getAllPosts = async (req, res) => {
  try {
    const allPosts = await postModel.find().sort({ createdAt: -1 });
    res.status(200).json(allPosts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Update post
const updatePosts = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such workout" });
    }

    const updatePost = await postModel.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    );

    if (!updatePost) {
      return res.status(404).json({ error: "No such workout" });
    }

    res.status(200).json(updatePost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Delete post
const deletePosts = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such workout" });
    }

    const deletePost = await postModel.findByIdAndDelete({ _id: id });

    if (!deletePost) {
      return res.status(404).json({ error: "No such workout" });
    }

    res.status(200).json(deletePost);
  } catch (error) {
    res.status(400).json({ error: "No such post" });
  }
};

//Get a single post
const getSinglePost = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such workout" });
    }

    const singlePost = await postModel.findById({ _id: id });

    if (!singlePost) {
      return res.status(404).json({ error: "No such workout" });
    }

    res.status(200).json(singlePost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Get categories
const test = async (req, res) => {
  try {
    const testPosts = await postModel.find().sort({ createdAt: -1 });
    res.status(200).json(testPosts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  createNewPost,
  getAllPosts,
  updatePosts,
  deletePosts,
  getSinglePost,
  test,
};
