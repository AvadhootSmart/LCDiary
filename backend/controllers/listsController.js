const Lists = require("../models/list");
const Users = require("../models/users");

exports.createList = async (req, res) => {
  const { name, problems } = req.body;
  try {
    const existingList = await Lists.findOne({ name });
    if (existingList) {
      return res.status(400).json({ error: "List already exists" });
    }
    const newList = await Lists.create({ name, problems, user: req.user._id });

    await Users.findOneAndUpdate(
      { _id: req.user._id },
      { $push: { lists: newList._id } },
    );
    res.status(201).json(newList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getUserLists = async (req, res) => {
  try {
    const lists = await Lists.find({ user: req.user._id });
    res.status(200).json(lists);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getListById = async (req, res) => {
  try {
    const list = await Lists.findById(req.params.id);
    res.status(200).json(list);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateList = async (req, res) => {
  try {
    const updatedList = await Lists.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(updatedList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

