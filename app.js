const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv/config");

// Middle ware
app.use(cors());
app.use(bodyParser.json());

// Import the Routes
const postRoute = require("./routes/posts");
const userRoute = require("./routes/users");

app.use("/posts", postRoute);
app.use("/users", userRoute);

// Use default router
const PORT = process.env.PORT || 3000;

// Create a listen port
app.listen(PORT, () => {
  console.log("Server is running");
});

// Connect the MongoDB
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("Connected");
});
