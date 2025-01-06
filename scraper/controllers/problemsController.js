const {
    scrapeProblemData,
    addProblems,
} = require("../services/problems.service");


exports.getProblemData = async (req, res) => {
    try {
        console.log(req.body.URL);
        const problemData = await scrapeProblemData(req.body.URL);
        res.status(200).json(problemData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Internal server error: ${error}` });
    }
};

// exports.addProblemsToDB = async (req, res) => {
//     try {
//         const newProblems = await addProblems(req.body.problems);
//         res.status(200).json(newProblems);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// };
