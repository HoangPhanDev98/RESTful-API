const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv/config");

// Middle ware
app.use(bodyParser.json());

// Import the Routes
const postRoute = require("./routes/posts");
const userRoute = require("./routes/users");

app.use("/posts", postRoute);
app.use("/users", userRoute);

// Create a listen port
app.listen(3000, () => {
  console.log("Listen port 3000");
});

// Connect the MongoDB
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("Connected");
});
