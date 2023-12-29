const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");

//Connect to MongoDB
mongoose
    .connect("mongodb://127.0.0.1:27017/sharetrip-api")
    .then(() => console.log("DB connected!"))
    .catch((err) => console.log("DB connection fail!"));

//Creating postSchema
const postSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true,
    },
    id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    timestamp: { type: Date, default: Date.now },
});

//Creating posts model
const Post = mongoose.model("Post", postSchema);

//Creating searchSchema
const searchSchema = new mongoose.Schema({
    keyword: {
        type: String,
        required: true,
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
    ],
    timestamp: { type: Date, default: Date.now },
});

//Creating searches model
const Search = mongoose.model("Search", searchSchema);

//server create
const app = express();
const port = 3000;

// Get route http://localhost:3000/search?keyword="mango"
app.get("/search", async function(req, res) {
    const keyword = req.query.keyword;
    //external api call
    const externalApiResponse = await axios.get("https://jsonplaceholder.typicode.com/posts");

    const posts = externalApiResponse.data;
    
    res.status(200).json(externalApiResponse.data);
});

//check server
app.listen(port, function () {
    console.log(`Server is running at http://localhost:${port}`);
});
