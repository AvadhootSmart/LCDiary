const Users = require("../models/users");
const { createUser } = require("../services/auth.service");

exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    const existingUser = await Users.findOne({ email: email });

    if (existingUser) {
        return res.status(400).json({ message: "User already exist" });
    }

    const hashedPassword = await Users.hashPassword(password);

    const user = await createUser({
        username: username,
        email: email,
        password: hashedPassword,
    });

    const token = user.generateAuthToken();

    res.status(201).json({ token, user });
};

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;

    const user = await Users.findOne({ username: username }).select("+password");

    if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = user.generateAuthToken();

    res.cookie("token", token);

    res.status(200).json({ token, user });
};
