const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const searchController = require("./searchController");

// Connect to MongoDB
mongoose
    .connect("mongodb://127.0.0.1:27017/sharetrip-api")
    .then(() => console.log("DB connected!"))
    .catch((err) => console.log("DB connection fail!"));

// Create Express app
const app = express();
const port = 3000;

// Define routes
app.get("/search", searchController);

// Start the server
app.listen(port, function () {
    console.log(`Server is running at http://localhost:${port}`);
});