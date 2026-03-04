import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

import inquiryRoutes from './routes/inquiryRoutes';
import authRoutes from './routes/authRoutes';
import contentRoutes from './routes/contentRoutes';
import productRoutes from './routes/productRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('combined'));

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again after 15 minutes'
});
app.use('/api/', limiter);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/products', productRoutes);
app.use('/api/inquiries', inquiryRoutes);

// Infrastructure & Health Check
app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({ status: 'UP', timestamp: new Date().toISOString() });
});

// Database Connection
const MONGODB_URI = process.env.MONGODB_URI || process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/narayan-enterprises';
mongoose.connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Atlas / Local'))
    .catch((err) => console.error('MongoDB connection error:', err));

export default app;
