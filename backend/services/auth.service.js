const Users = require("../models/users");

exports.createUser = async ({ username, email, password }) => {
  if (!username || !email || !password) {
    throw new Error("All fields are required");
  }
  const user = Users.create({
    username,
    email,
    password,
  });

  return user;
};
