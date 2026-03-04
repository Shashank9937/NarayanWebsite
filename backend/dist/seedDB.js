"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const dotenv_1 = __importDefault(require("dotenv"));
const User_1 = require("./models/User");
const Product_1 = require("./models/Product");
const Content_1 = require("./models/Content");
dotenv_1.default.config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/narayan-enterprises';
const seedDB = async () => {
    try {
        if (mongoose_1.default.connection.readyState === 0) {
            await mongoose_1.default.connect(MONGO_URI);
        }
        console.log('Connected to DB for Seeding...');
        // Seed Admin
        const adminExists = await User_1.User.findOne({ email: 'admin@narayan.com' });
        if (!adminExists) {
            const hashedPassword = await bcryptjs_1.default.hash('admin123', 10);
            await User_1.User.create({ email: 'admin@narayan.com', password: hashedPassword, role: 'admin' });
            console.log('Seeded Admin User (admin@narayan.com / admin123)');
        }
        // Seed Homepage Stats & Text
        const homeContentExists = await Content_1.Content.findOne({ key: 'homepage' });
        if (!homeContentExists) {
            await Content_1.Content.create({
                key: 'homepage',
                value: {
                    heroHeadline: 'Clean Industrial Energy with Biomass Fuel',
                    heroDescription: 'Replacing traditional fossil fuels with sustainable, high-efficiency biomass pellets and briquettes.',
                    stats: [
                        { label: 'Tons Supplied', value: '5000+' },
                        { label: 'Industrial Clients', value: '120+' },
                        { label: 'Power Plants Served', value: '15' }
                    ]
                }
            });
            console.log('Seeded Homepage Content');
        }
        // Seed Initial Products
        const productsCount = await Product_1.Product.countDocuments();
        if (productsCount === 0) {
            await Product_1.Product.insertMany([
                {
                    title: 'Biomass Pellets',
                    shortDescription: 'Stove and Boiler Grade High-Density Pellets',
                    description: 'Premium biomass pellets crafted for industrial burners and stoves to provide maximum heat efficiency and lower emissions.',
                    imageUrl: 'https://images.unsplash.com/photo-1582216518778-be7213baf931?w=600',
                    features: ['Low Ash Content (< 5%)', 'High Calorific Value', 'Carbon Neutral']
                },
                {
                    title: 'Briquettes',
                    shortDescription: 'Large Diameter Industrial Boiler Grade Fuel',
                    description: 'Made from highly compressed agriculture waste. These are 90mm diameter briquettes ideal for extremely large industrial steam boiler operations.',
                    imageUrl: 'https://images.unsplash.com/photo-1620608518882-628d70bde68e?w=600',
                    features: ['Long Burning Time', 'Cost-effective alternative to Coal', 'Directly usable in solid fuel boilers']
                }
            ]);
            console.log('Seeded Products');
        }
        console.log('Seeding Complete');
    }
    catch (err) {
        console.error('Seeding Error:', err);
    }
};
exports.seedDB = seedDB;
if (require.main === module) {
    (0, exports.seedDB)().then(() => mongoose_1.default.connection.close());
}
