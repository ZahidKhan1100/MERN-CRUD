const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Teacher name required"],
  },
  email: {
    type: String,
    required: [true, "Teacher Email required"],
  },
  phone: {
    type: String,
    required: [true, "Phone number required"],
  },
});

module.exports = mongoose.model("teachers", TeacherSchema);
