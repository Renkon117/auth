const express = require("express");
const app = express();

//import Routes
const authRoute = require("./routes/auth");

//Route Middleware
app.use("./api/user", authRoute);

app.listen(4000, () => console.log("Server up and running"));
