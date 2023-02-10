const express = require("express");
const bodyParser = require('body-parser')

const mongoose = require("mongoose");
const employeeRouter = require("./routes/employees");

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect('mongodb://127.0.0.1:27017/employees');

app.use('/api/employees', employeeRouter);

app.listen(3000, () => {
  console.log("Server is running...");
});