const { ObjectID } = require('mongodb');
const Product = require('../models/productModel');

// Create products for male
const CreateProducts = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.json(product._id);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Fetch all Products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Fetch Products According to male and female according to query
const getQueryProducts = async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) {
      return res.status(400).json({ message: "Missing 'q' query parameter" });
    }

    const filter = { gender: { $regex: query, $options: 'i' } };
    const results = await Product.find(filter);
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get products by ID
const getProductsById = async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) {
      return res.status(400).json({ message: "Missing 'q' query parameter" });
    }

    const id = ObjectID(query);
    const filter = { _id: id };
    const results = await Product.find(filter);
    res.json(results);
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
