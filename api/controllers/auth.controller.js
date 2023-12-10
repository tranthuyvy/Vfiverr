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
  } catch (err) {
    res.status(500).send("Something wrong");
  }
};
export const login = async (req, res) => {};
export const logout = async (req, res) => {};
