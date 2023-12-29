const mongoose = require("mongoose");

// Define the Search model schema
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

// Create the Search model
const Search = mongoose.model("Search", searchSchema);

// Export the Search model
module.exports = Search;