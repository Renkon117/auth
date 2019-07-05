const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");

//import Routes
const authRoute = require("./routes/auth");

//Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("connected to DB")
);

//Middleware
app.use(bodyParser.json());

//Route Middleware
app.use("/api/user", authRoute);

app.listen(4000, () => console.log("Server up and running"));
