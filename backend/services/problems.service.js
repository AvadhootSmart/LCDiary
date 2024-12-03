const puppeteer = require("puppeteer-core");
const Problems = require("../models/problems");

exports.scrapeProblemData = async (URL) => {
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: "/usr/bin/google-chrome", // Ensure Chrome is installed
    });

    const page = await browser.newPage();

    try {
        await page.goto(URL, { waitUntil: "networkidle0" });

        // Extract code snippet
        const content = await page.evaluate(() => {
            // CodeMirror stores text in spans within `.view-lines`
            // const lines = document.querySelectorAll(".view-lines > div > span");
            // return Array.from(lines)
            //   .map((line) => line.innerText)
            //   .join("\n");
            // const code = document.querySelector(".view-lines").innerText;
            const title = document
                .querySelector(".text-title-large")
                .innerText.slice(3);
            const difficulty = document.querySelector(".text-caption").innerText;
            const topics = Array.from(
                document.querySelectorAll('a[href^="/tag/"]'),
            ).map((tag) => tag.innerText);
            return { title, difficulty, topics };
        });

        return content;
        // console.log("Code:", content.code);
        // console.log("Difficulty:", content.difficulty);
        // console.log("Topics:", content.topics);
    } catch (err) {
        console.error("Error while extracting code:", err);
    } finally {
        await browser.close();
    }
};

exports.addProblems = async (problem) => {
    try {
        // const newProblem = await Problems.create(problem);
        const newProblems = await Problems.insertMany(problem);
        // Problems.insertMany(problem);
        return newProblems;
    } catch (error) {
        console.error(error);
    }
};
