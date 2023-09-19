require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const postRoutes = require("./routes/posts");
const categoryRoutes = require("./routes/category");

//express app
const app = express();

//middleware
app.use(express.json());

//connect to DB
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    console.log("Database connection is succesfull");
  })
  .catch((error) => {
    console.log(error);
  });

//routes
app.use("/api/posts/", postRoutes);
app.use("/api/category/", categoryRoutes);

//listen for request
app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});
