const TeacherModel = require("../models/TeacherModel");

async function addTeacher(req, res) {
  try {
    const { name, email, phone, id } = req.body.data;

    // Check if ID is provided
    if (id) {
      // Update teacher if ID is provided
      const existingTeacher = await TeacherModel.findById(id);
      if (!existingTeacher) {
        return res.status(404).send({ message: "Teacher not found" });
      }

      // Update existing teacher's details
      existingTeacher.name = name;
      existingTeacher.email = email;
      existingTeacher.phone = phone;

      // Save the updated teacher
      await existingTeacher.save();

      return res.status(200).send({ message: "Teacher updated successfully" });
    } else {
      // Insert new teacher if ID is not provided
      const emailExist = await TeacherModel.findOne({ email });
      if (emailExist) {
        return res.status(400).send({ message: "Email already exists" });
      }

      // Create a new teacher instance
      const newTeacher = new TeacherModel({
        name,
        email,
        phone,
      });

      // Save the new teacher
      await newTeacher.save();

      return res.status(200).send({ message: "Teacher added successfully" });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

async function getTeachers(req, res) {
  try {
    const result = await TeacherModel.find();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

async function getTeacher(req, res) {
  try {
    const id = req.query.id;
    console.log(id);
    const result = await TeacherModel.findById(id);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

async function deleteTeacher(req, res) {
  try {
    const id = req.query.id;
    const result = await TeacherModel.findByIdAndDelete(id);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

module.exports = { addTeacher, getTeachers, getTeacher, deleteTeacher };
