const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(409).json({ msg: 'User already exists', status: 409 });

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ email, password: hashedPassword });

        if (!user.addresses) {
            user.addresses = [];
        }

        const savedUser = await user.save();
        const token = jwt.sign({ userId: savedUser._id }, process.env.jwtKey, { expiresIn: '24h' });

        res.cookie('token', token, { expires: new Date(Date.now() + 24 * 60 * 60 * 1000), httpOnly: true });

        res.status(201).json({ token, msg: 'User successfully registered' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ msg: 'Email not found', status: 404 });
        }

        const passwordMatch = await bcrypt.compare(password, existingUser.password);
        if (!passwordMatch) {
            return res.status(401).json({ msg: 'Invalid password', status: 401 });
        }

        const token = jwt.sign({ userId: existingUser._id }, process.env.jwtKey, { expiresIn: '24h' });

        res.cookie('token', token, { expires: new Date(Date.now() + 24 * 60 * 60 * 1000), httpOnly: true });

        res.status(201).json({ token, msg: 'User successfully logged in' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getUsersEndpoint = async (req, res) => {
    try {
        const userId = req.userId;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found', status: 404 });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addAddress = async (req, res) => {
    try {
        const userId = req.userId;
        const address = req.body.address;

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $push: { addresses: address } },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found', status: 404 });
        }

        res.status(200).json({ message: 'Document updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    registerUser,
    loginUser,
    getUsersEndpoint,
    addAddress,
};
