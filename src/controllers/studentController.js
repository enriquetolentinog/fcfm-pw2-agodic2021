const Student = require('../models/studentSchema');

exports.student_create = async (req, res) => {
    const { body } = req;

    let student = new Student(body);

    await student
            .save()
            .catch(err => {
                console.log("UPS!", err);
            });

    res.send(student);
}

exports.student_getall = async (req, res) => {
    const data = await Student.find().populate("school");

    res.send(data);
}