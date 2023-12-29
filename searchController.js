const axios = require("axios");
const mongoose = require("mongoose");
const Post = require("./postModel");
const Search = require("./searchModel");

// Controller function for handling search requests
async function searchController(req, res) {
    try {
        const keyword = req.query.keyword;

        // External API call
        const externalApiResponse = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        const posts = externalApiResponse.data;

        // Filter posts based on keyword
        const matchingPosts = posts.filter((post) => {
            return (
                post.title.toLowerCase().includes(keyword.toLowerCase()) ||
                post.body.toLowerCase().includes(keyword.toLowerCase())
            );
        });

        if (matchingPosts.length > 0) {
            // Save matching posts in the database
            const savedPosts = await Post.insertMany(matchingPosts);

            // Save the search
            const search = new Search();
            search.keyword = keyword;
            search.posts = savedPosts.map((savePost) => savePost._id);
            await search.save();

            // Return the matching posts to the user
            res.json(matchingPosts);
        } else {
            // Send an empty array if no matches
            res.status(200).json([]);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = searchController;