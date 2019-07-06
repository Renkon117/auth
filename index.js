const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");

const postRoute = require("./routes/posts");

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
app.use("/api/posts", postRoute);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log("Server up and running" + PORT));
