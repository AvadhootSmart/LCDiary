const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  progress: {
    type: Number,
  },
  problems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Problems",
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Lists = mongoose.model("Lists", listSchema);
module.exports = Lists;
