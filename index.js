const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const path = require("path");
const cron = require("node-cron");

const restApi = require("./apis");
const Confessions = require("./models/confessions");

const app = express();

// CORS Middleware
app.use(cors());
//Body parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//mongoDB Config
const db = require("./config/keys").mongoURI;

//Connect to mongoDB using mongoose
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Connection Failure", err));

// Schedule tasks to be run on the server.
cron.schedule("59 23 * * *", function (req, res) {
  console.log("cron job");
  Confessions.deleteMany()
    .then((response) => console.log("success from cron job", response))
    .catch((err) => console.log("error from cron job", err));
});

//Use routes
app.use("/api/", restApi);

// "process.env.PORT" is used to run the app in heroku
const port = process.env.PORT || 4000;

app.listen(port, () => console.log("Server running on the port", port));
