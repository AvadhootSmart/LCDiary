const {
  // scrapeProblemData,
  addProblems,
} = require("../services/problems.service");

const { scrapeProblemData } = require("../services/temp.service");

exports.getProblemData = async (req, res) => {
  try {
    const problemData = await scrapeProblemData(req.body.URL);
    // const newProblem = await addProblem(problemData);
    const { content, URL } = problemData;
    res.status(200).json({ ...content, URL });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Internal server error: ${error}` });
  }
};

exports.addProblemsToDB = async (req, res) => {
  try {
    const newProblems = await addProblems(req.body.problems);
    res.status(200).json(newProblems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
