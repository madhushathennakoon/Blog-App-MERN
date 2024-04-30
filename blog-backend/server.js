require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const postRoutes = require("./routes/posts");
const categoryRoutes = require("./routes/category");
const userRoutes = require("./routes/user");

//express app
const app = express();

//middleware
app.use(express.json({ limit: "25mb" }));

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
app.use("/api/user/", userRoutes);

//listen for request
app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});
