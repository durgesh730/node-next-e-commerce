const Cart = require('../models/cartModel');

const createProductCart = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming you have middleware to extract the user ID
    const cart = new Cart({ ...req.body, userId, totalItem: 1 });
    const save = await cart.save();
    res.json(save);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getProductFromCart = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming you have middleware to extract the user ID
    const cart = await Cart.find({ userId });
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteProductFromCart = async (req, res) => {
  try {
    const productId = req.query.q;
    if (!productId) {
      return res.status(400).json({ message: "Missing 'q' query parameter" });
    }

    const deletedProduct = await Cart.findOneAndDelete({ productId });
    res.json(deletedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateProductFromCart = async (req, res) => {
  try {
    const productId = req.query.q;
    if (!productId) {
      return res.status(400).json({ message: "Invalid query parameter 'q'" });
    }

    const totalItem = req.body.totalItem;
    const filter = { productId };
    const update = { $set: { totalItem } };

    const result = await Cart.updateOne(filter, update);
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Document updated successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createProductCart,
  getProductFromCart,
  deleteProductFromCart,
  updateProductFromCart,
};
