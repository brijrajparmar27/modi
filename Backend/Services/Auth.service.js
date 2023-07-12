const bcrypt = require("bcrypt");
const db = require("../Config/Database");

const AddUser = async (email, password, confirmPassword, res) => {
  if (!email || !password || !confirmPassword) {
    throw new Error("Email, password, and confirm password are required.");
  }

  if (password !== confirmPassword) {
    throw new Error("Passwords do not match.");
  }

  const existingUser = await db("user").where({ email }).first();
  if (existingUser) {
    throw new Error("User already exists with this email.");
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const newUser = await db("user").insert({
    email,
    password: hashedPassword,
  });

  return { email, password };
};

const signIn = async (email, password) => {
  if (!email || !password) {
    throw new Error("Email and password are required.");
  }

  const user = await db("user").where({ email }).first();
  if (!user) {
    throw new Error("User not found with this email.");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid password.");
  }

  return user;
};

module.exports = {
  AddUser,
  signIn,
};
