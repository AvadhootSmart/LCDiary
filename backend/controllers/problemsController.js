const dotenv = require("dotenv").config();
const axios = require("axios");

// const { scrapeProblemData } = require("../services/temp.service");

exports.getProblemData = async (req, res) => {
  try {
    const problemData = await axios.post(`${process.env.SERVICE_URL}/problem`, {
      URL: req.body.URL,
    });

    if (!problemData) {
      res.status(404).json("Problem data not found");
    }
    // console.log(problemData);
    const { data } = problemData;
    const { content, URL } = data;
    res.status(200).json({ ...content, URL });
    // res.status(200).json(problemData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Internal server error: ${error}` });
  }
};

// exports.addProblemsToDB = async (req, res) => {
//   try {
//     const newProblems = await addProblems(req.body.problems);
//     res.status(200).json(newProblems);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };
