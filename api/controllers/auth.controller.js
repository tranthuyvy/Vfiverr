import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 10);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(200).send("Created successful");
  } catch (error) {
    res.status(500).send("Something wrong");
  }
};
export const login = async (req, res) => {
  try {
    const user = await User.findOne({
      usernam: req.body.username,
    });
    if (!user) return res.status(404).send("Wrong username or password");

    const isPassword = bcrypt.compareSync(req.body.password, user.password);
    if (!isPassword) return res.status(400).send("Wrong password or username");

    const { password, ...info } = user._doc;
    res.status(200).send(info);
  } catch (error) {
    res.status(500).send("Something wrong");
  }
};
export const logout = async (req, res) => {};
