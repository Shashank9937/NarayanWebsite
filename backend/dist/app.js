"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const dotenv_1 = __importDefault(require("dotenv"));
const inquiryRoutes_1 = __importDefault(require("./routes/inquiryRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const contentRoutes_1 = __importDefault(require("./routes/contentRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)('combined'));
// Rate Limiting
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again after 15 minutes'
});
app.use('/api/', limiter);
// Routes
app.use('/api/auth', authRoutes_1.default);
app.use('/api/content', contentRoutes_1.default);
app.use('/api/products', productRoutes_1.default);
app.use('/api/inquiries', inquiryRoutes_1.default);
// Infrastructure & Health Check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', timestamp: new Date().toISOString() });
});
// Database Connection
const MONGODB_URI = process.env.MONGODB_URI || process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/narayan-enterprises';
mongoose_1.default.connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Atlas / Local'))
    .catch((err) => console.error('MongoDB connection error:', err));
exports.default = app;
