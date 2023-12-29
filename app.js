const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");

const app = express();
const port = 3000;

app.get("/hello", function(req, res) {
    res.send("HELLO");
});

app.listen(port, function () {
    console.log(`Server is running at http://localhost:${port}`);
});
