const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const problemRoutes = require("./routes/problemsRoutes");
const authRoutes = require("./routes/authRoutes");
const listRoutes = require("./routes/listRoutes");
const connectDB = require("./db/connectDB");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.get("/", (req, res) => {
    res.send("Backend is running successfully!");
});
app.use("/v1/auth", authRoutes);
app.use("/v1/problem", problemRoutes);
app.use("/v1/list", listRoutes);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
