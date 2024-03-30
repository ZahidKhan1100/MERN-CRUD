const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/mern-crud";

const connectDB = async (req, res) => {
  try {
    await mongoose
      .connect(url)
      .then(() => {
        console.log("database connected");
      })
      .catch((error) => {
        console.log(error.message);
      });
  } catch (error) {
    res.send({ message: error.message });
  }
};


module.exports = connectDB;