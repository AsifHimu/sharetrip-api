const mongoose = require("mongoose");

// Define the Post model schema
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

// Create the Post model
const Post = mongoose.model("Post", postSchema);

// Export the Post model
module.exports = Post;