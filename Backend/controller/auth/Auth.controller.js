const AddUser = require("../../Services/Auth.service");
const AuthService = require("../../Services/Auth.service");
const signUp = async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body;
    const user = await AuthService.AddUser(email, password, confirmPassword);
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await AuthService.signIn(email, password);
    res
      .status(200)
      .json({
        email: user.email,
        password: user.password,
        message: "user sign in successfully",
        email,
        password,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  signUp,
  signIn,
};
