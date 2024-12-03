const Lists = require("../models/list");

exports.createList = async (req, res) => {
  const { name, problems, _id } = req.body;
  try {
    const newList = await Lists.create({ name, problems, user: _id });
    res.status(201).json(newList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};

exports.getUserLists = async (req, res) => {
  try {
    const lists = await Lists.find({ "user._id": req._id });
    res.status(200).json(lists);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};
