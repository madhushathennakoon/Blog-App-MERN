const express = require("express");
const {
  createNewPost,
  getAllPosts,
  updatePosts,
  deletePosts,
  getSinglePost,
} = require("../controllers/postController");

const router = express.Router();

//POST a new post
router.post("/", createNewPost);

//GET all posts
router.get("/", getAllPosts);

//UPDATE a post
router.patch("/:id", updatePosts);

//DELETE a post
router.delete("/:id", deletePosts);

//GET a single post
router.get("/:id", getSinglePost);

module.exports = router;
