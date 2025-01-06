const puppeteer = require("puppeteer");

exports.scrapeProblemData = async (URL) => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath:
      process.env.NODE_ENV === "production"
        ? process.env.PUPPETEER_EXECUTABLE_PATH
        : puppeteer.executablePath(),
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-blink-features=AutomationControlled",
      "--no-zygote",
      "--single-process",
    ],
  });

  const page = await browser.newPage();

  try {
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    );

    await page.goto(URL, { waitUntil: "domcontentloaded" });

    await page.setViewport({ width: 1280, height: 800 });

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
      const topics = Array.from(document.querySelectorAll('a[href^="/tag/"]'))
        .slice(0, 4)
        .map((tag) => tag.innerText);
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
