const express = require("express");
const dotenv = require("dotenv").config();
const { clerkMiddleware } = require("@clerk/express");
const app = express();
const problemRoutes = require("./routes/problemsRoutes");
const connectDB = require("./db/connectDB");
const PORT = process.env.PORT || 3000;

app.use(clerkMiddleware());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.get("/", (req, res) => {
    res.send("Backend runs successfully!");
});

app.use("/v1/problem", problemRoutes);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
