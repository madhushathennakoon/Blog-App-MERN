const express = require("express");
const {
  createNewPost,
  getAllPosts,
  updatePosts,
  deletePosts,
  getSinglePost,

  test,
} = require("../controllers/postController");

const router = express.Router();

//POST a new post
router.post("/", createNewPost);

//GET all posts
router.get("/", getAllPosts);

//GET a single post
router.get("/:id", getSinglePost);

//UPDATE a post
router.patch("/:id", updatePosts);

//DELETE a post
router.delete("/:id", deletePosts);

router.get("/testApi", test);

module.exports = router;
