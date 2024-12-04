const mongoose = require("mongoose");

const problemsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    topics: [
        {
            type: String,
            required: true,
        },
    ],
    difficulty: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
});

const Problems = mongoose.model("Problems", problemsSchema);
module.exports = Problems;
