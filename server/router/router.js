const express = require("express");
const TeacherController = require("../controllers/TeacherController");
const router = express.Router();

router.route("/add-teacher").post(TeacherController.addTeacher);
router.route("/get-teachers").get(TeacherController.getTeachers);
router.route("/get-teacher").get(TeacherController.getTeacher);
router.route("/delete-teacher").delete(TeacherController.deleteTeacher);




module.exports = router;
