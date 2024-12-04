const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    progress: {
        type: Number,
    },
    problems: [],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

const Lists = mongoose.model("Lists", listSchema);
module.exports = Lists;
