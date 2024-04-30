const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      // required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    username: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("mern blog-post", postSchema);
