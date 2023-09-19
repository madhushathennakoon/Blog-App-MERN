const express = require("express");
const {
  getTechCategory,
  getNewsCategory,
} = require("../controllers/categoryController");

const router = express.Router();

//GET tech category
router.get("/tech", getTechCategory);

//GET news category
router.get("/news", getNewsCategory);

module.exports = router;
