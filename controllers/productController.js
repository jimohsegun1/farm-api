
import Product from '../models/Product.js';

export const getFarmerProducts = async (req, res) => {
  const products = await Product.find({ owner: req.user._id });
  res.status(200).json(products);
};

export const getProductById = async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id, owner: req.user._id });
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.status(200).json(product);
};

export const createProduct = async (req, res) => {
  const { title, description, price, imageUrl } = req.body;
  const product = await Product.create({
    title,
    description,
    price,
    imageUrl,
    owner: req.user._id
  });
  res.status(201).json(product);
};

export const updateProduct = async (req, res) => {
  const product = await Product.findOneAndUpdate(
    { _id: req.params.id, owner: req.user._id },
    req.body,
    { new: true }
  );
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.status(200).json(product);
};

export const deleteProduct = async (req, res) => {
  const product = await Product.findOneAndDelete({ _id: req.params.id, owner: req.user._id });
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.status(200).json({ message: 'Product deleted' });
};
