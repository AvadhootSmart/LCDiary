const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const problemRoutes = require("./routes/problemsRoutes");
const PORT = process.env.PORT || 3000;
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
    res.send("Scraper Service is running successfully!");
});
app.use("/problem", problemRoutes);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
