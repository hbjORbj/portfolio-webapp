const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    if (user.authenticate(password)) {
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "3d",
      });
      const { _id, name, email } = user;
      return res.json({ token, user: { _id, name, email } });
    } else {
      return res.status(401).json({ error: "Incorrect password." });
    }
  } else {
    res.status(401).json({ error: "Incorrect email." });
  }
};

exports.signUp = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(403).json({
      error: "An account associated with the following email already exists.",
    });
  } else {
    const user = new User({ name, email, password });
    await user.save();
    return res.json({ message: "You're Signed Up! Please Log in and Enjoy!" });
  }
};
