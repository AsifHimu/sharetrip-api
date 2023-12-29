const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");

const app = express();
const port = 3000;

app.get("/search", async function(req, res) {
    const keyword = req.query.keyword;
    const externalApiResponse = await axios.get("https://jsonplaceholder.typicode.com/posts");
    res.status(200).json(externalApiResponse.data);
});

app.listen(port, function () {
    console.log(`Server is running at http://localhost:${port}`);
});
