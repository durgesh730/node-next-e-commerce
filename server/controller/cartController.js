const Cart = require('../models/cartModel');

const createProductCart = async (req, res) => {
  try {
    const userId = req.userId;
    const cart = new Cart({ ...req.body, userId, totalItem: 1 });
    const save = await cart.save();
    res.json(save);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getProductFromCart = async (req, res) => {
  try {
    const userId = req.userId;
    const cart = await Cart.find({ userId })
      .populate('userId')
      .populate('productId')
      .exec();
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const deleteProductFromCart = async (req, res) => {
  try {
    const productId = req.prams.q;
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
    const productId = req.params.q;
    if (!productId) {
      return res.status(400).json({ message: "Invalid query parameter 'q'" });
    }

    const totalItem = req.body.totalItem;
    const filter = { productId };
    const update = { $set: { totalItem } };

    // Update the document and retrieve the updated data
    const updatedCart = await Cart.findOneAndUpdate(filter, update, { new: true })
    if (!updatedCart) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    const updatedData = await Cart.find({})
      .populate('userId')
      .populate('productId')
      .exec();

    res.status(200).json({ message: 'Document updated successfully', updatedData });
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
