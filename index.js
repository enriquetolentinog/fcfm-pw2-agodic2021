const express = require("express");
const bodyParser = require("body-parser");
require("./src/models/connection");

/** requires de rutas */
const school_router = require('./src/routes/schoolRouter');
const student_router = require('./src/routes/studentRouter');

const app = express();
const port = 3000; // 5000 // 5001

app.use(bodyParser.json());
app.use('/api', school_router);
app.use('/api', student_router);

app.listen(port, () => {
  console.log(
    "La aplicación está escuchando al puerto http://localhost:" + port
  );
});
