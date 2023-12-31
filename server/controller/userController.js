const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const generateToken = require('../helper/generateToken');

const registerUser = async (req, res) => {
    try {
        const { email, password, firstName } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(409).json({ msg: 'User already exists', status: 409 });

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ firstName, email, password: hashedPassword });

        const savedUser = await user.save();

        const token = generateToken(savedUser._id)
        res.cookie('token', token, { expires: new Date(Date.now() + 24 * 60 * 60 * 1000), httpOnly: true });

        res.status(201).json({ savedUser, token, msg: 'User successfully registered' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (!existingUser) return res.status(404).json({ msg: 'Email not found', status: 404 });

        const passwordMatch = await bcrypt.compare(password, existingUser.password);
        if (!passwordMatch) return res.status(401).json({ msg: 'Invalid password', status: 401 });

        const token = generateToken(existingUser._id);
        res.cookie('token', token, { expires: new Date(Date.now() + 24 * 60 * 60 * 1000), httpOnly: true });

        res.status(201).json({ existingUser, token, msg: 'User successfully Logged In' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getUser = async (req, res) => {
    try {
        const userId = req.userId;
        const user = await User.findById(userId);

        if (!user) return res.status(404).json({ message: 'User not found', status: 404 });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addAddress = async (req, res) => {
    try {
        const userId = req.userId;
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $push: { address: req.body } },
            { new: true }
        );

        if (!updatedUser) return res.status(404).json({ message: 'User not found', status: 404 });

        res.status(200).json({ message: 'Document updated successfully', updatedUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    registerUser,
    loginUser,
    getUser,
    addAddress,
};
