const puppeteer = require("puppeteer-core");
const chromium = require("@sparticuz/chromium-min");
const Problems = require("../models/problems");

chromium.setHeadlessMode = true;

chromium.setGraphicsMode = false;

exports.scrapeProblemData = async (URL) => {

    const browser = await puppeteer.launch({
        headless: chromium.headless, // Headless mode for serverless
        executablePath: await chromium.executablePath(),
        defaultViewport: chromium.defaultViewport,
        ignoreHTTPSErrors: true,
    });

    const page = await browser.newPage();

    // await page.setUserAgent(
    //     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    // );
    // await page.setViewport({ width: 1280, height: 800 });

    try {
        await page.goto(URL, { waitUntil: "domcontentloaded" });

        await page.waitForSelector(".text-title-large");
        await page.waitForSelector(".text-caption");
        await page.waitForSelector('a[href^="/tag/"]');

        // Extract data
        const content = await page.evaluate(() => {
            const title = document
                .querySelector(".text-title-large")
                .innerText.slice(3);
            const difficulty = document.querySelector(".text-caption").innerText;
            const topics = Array.from(
                document.querySelectorAll('a[href^="/tag/"]')
            ).map((tag) => tag.innerText);
            return { title, difficulty, topics };
        });

        return { content, URL };
    } catch (err) {
        console.error("Error while extracting data:", err);
        throw err;
    } finally {
        if (browser) {
            await browser.close(); // Make sure the browser is closed after execution
        }
    }
};

exports.addProblems = async (problem) => {
    try {
        const newProblems = await Problems.insertMany(problem);
        return newProblems;
    } catch (error) {
        console.error("Error adding problems:", error);
        throw error;
    }
};
