const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const { logger } = require("../helpers/logger");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

//Login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: "fail",
        message: "All field must be filled",
      });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        status: "fail",
        message: "Incorrect email",
      });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({
        status: "fail",
        message: "Incorrect password",
      });
    }

    //Create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token, username: user.name });
  } catch (error) {
    logger.error(error);
    res.status(400).json({ message: error });
  }
};

//Signup User
const signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //Validation
    if (!email || !password || !name) {
      return res.status(400).json({
        status: "fail",
        message: "All field must be filled",
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        status: "fail",
        message: "Email is not valid",
      });
    }

    if (!validator.isStrongPassword(password)) {
      return res.status(400).json({
        status: "fail",
        message: "Password not strong enough",
      });
    }

    //Password Encrypted
    const salt = await bcrypt.genSalt(12);
    const hashedPass = await bcrypt.hash(password, salt);

    //Check email
    const exist = await userModel.findOne({ email });
    console.log(exist);
    if (exist) {
      return res.status(400).json({
        status: "fail",
        message: "Email already in use",
      });
    }

    //Create user in database
    const user = await userModel.create({
      email,
      password: hashedPass,
      name,
    });

    //Create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    logger.error(error);
    res.status(400).json({ message: error });
  }
};

module.exports = { loginUser, signupUser };
