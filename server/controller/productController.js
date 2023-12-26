const Product = require('../models/productModel')

// Create products
const CreateProducts = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Fetch all Products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res. status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Fetch Products According to male and female according to query
const getQueryProducts = async (req, res) => {
  try {
    const query = req.params.q;
    if (!query) return res.status(400).json({ message: "Missing query parameter" });

    const filter = { gender: { $regex: query, $options: 'i' } };
    const results = await Product.find(filter);
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get products by ID
const getProductsById = async (req, res) => {
  try {
    const query = req.params.id;
    if (!query) return res.status(400).json({ message: "Missing  query parameter" });

    const results = await Product.find({ _id: query });
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  CreateProducts,
  getProducts,
  getQueryProducts,
  getProductsById,
};
