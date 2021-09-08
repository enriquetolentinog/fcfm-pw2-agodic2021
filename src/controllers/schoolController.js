const School = require("../models/schoolSchema");

exports.school_create = async (req, res) => {
  // tomar los datos del body
  const { body } = req;

  // validación de información
  // campos requeridos, longitud de textos, valores númericos mayores o menores a X, tenga un valor
  //res.send({message: "El campo tal, no cumple con X validación"})

  let newSchool = new School(body);

  await newSchool
    .save()
    .then((newDBObject) => console.log("Success!", newDBObject))
    .catch((err) => console.log("oops!", err));

  res.send(newSchool);
};

exports.school_getall = async (req, res) => {
  const data = await School.find();

  res.send(data);
};

exports.school_getbyid = async (req, res) => {
  //req.query
  const { id } = req.params;
  // validación de que si traiga un parametro
  const data = await School.findById(id);

  res.send(data);
};

exports.school_update = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const data = await School.findOneAndUpdate({ _id: id }, body);

  res.send(data);
};

exports.school_delete = async (req, res) => {
  const { id } = req.params;

  await School.deleteOne({ _id: id });

  res.send({ message: "School was deleted successfully" });
};

//CRUD
