const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  problems: [
    {
      title: {
        type: String,
        required: true,
      },
      difficulty: {
        type: String,
        required: true,
      },
      URL: {
        type: String,
        required: true,
      },
      topics: [
        {
          type: String,
          required: true,
        },
      ],
      isSolved: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Lists = mongoose.model("Lists", listSchema);
module.exports = Lists;
