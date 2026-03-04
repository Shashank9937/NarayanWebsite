"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = require("../models/User");
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User_1.User.findOne({ email });
        if (!user) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }
        const isMatch = await bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }
        const token = jsonwebtoken_1.default.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET || 'secret123', { expiresIn: '12h' });
        res.json({ token, email: user.email, role: user.role });
    }
    catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};
exports.login = login;
