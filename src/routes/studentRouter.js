const express = require('express');
const router = express.Router();

const student_controller = require('../controllers/studentController');

router.post("/student", student_controller.student_create);
router.get("/student", student_controller.student_getall);


module.exports = router;