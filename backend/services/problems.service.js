const puppeteer = require("puppeteer");
const Problems = require("../models/problems");
const path = require("path");

const getChromePath = () => {
    const puppeteerCorePath = require.resolve('puppeteer-core');
    const basePath = path.dirname(puppeteerCorePath);
    return path.join(basePath, '.local-chromium', 'chrome-linux', 'chrome');

}
exports.scrapeProblemData = async (URL) => {
    const browser = await puppeteer.launch({
        executablePath: getChromePath(), // Ensure Chrome is installed
        headless: true,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-blink-features=AutomationControlled",
        ],
    });

    const page = await browser.newPage();

    try {
        await page.setUserAgent(
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        );
        await page.setViewport({ width: 1280, height: 800 });

        await page.goto(URL, { waitUntil: "domcontentloaded" });

        await page.waitForSelector(".text-title-large");
        await page.waitForSelector(".text-caption");
        await page.waitForSelector('a[href^="/tag/"]');
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

        return { content, URL };
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
