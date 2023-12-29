const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");

const app = express();
const port = 3000;

app.get("/search", function(req, res) {
    const keyword = req.query.keyword;
    console.log(keyword);
    res.send("HELLO");
});

app.listen(port, function () {
    console.log(`Server is running at http://localhost:${port}`);
});
