const postModel = require("../models/postModel");

//Get tech category
const getTechCategory = async (req, res) => {
  try {
    const techCategory = await postModel.find({ category: "tech" });
    res.status(200).json(techCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Get news category
const getNewsCategory = async (req, res) => {
  try {
    const newsCategory = await postModel.find({ category: "news" });
    res.status(200).json(newsCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getTechCategory, getNewsCategory };
