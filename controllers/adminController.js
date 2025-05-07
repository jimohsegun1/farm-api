import User from "../models/User.js";
import Product from "../models/Product.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.status(200).json(users);
};

export const toggleUserBan = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });

  user.isBanned = !user.isBanned;
  await user.save();

  res
    .status(200)
    .json({ message: `User ${user.isBanned ? "banned" : "unbanned"}` });
};

export const getAllProducts = async (req, res) => {
  const products = await Product.find().populate("owner", "name phone");
  res.status(200).json(products);
};

export const deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });

  res.status(200).json({ message: "Product deleted successfully" });
};
