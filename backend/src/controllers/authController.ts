import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }

        const token = jwt.sign(
            { userId: user._id, role: user.role },
            process.env.JWT_SECRET || 'secret123',
            { expiresIn: '12h' }
        );

        res.json({ token, email: user.email, role: user.role });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};
