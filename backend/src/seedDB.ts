import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { User } from './models/User';
import { Product } from './models/Product';
import { Content } from './models/Content';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/narayan-enterprises';

export const seedDB = async () => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(MONGO_URI);
        }
        console.log('Connected to DB for Seeding...');

        // Seed Admin
        const adminExists = await User.findOne({ email: 'admin@narayan.com' });
        if (!adminExists) {
            const hashedPassword = await bcrypt.hash('admin123', 10);
            await User.create({ email: 'admin@narayan.com', password: hashedPassword, role: 'admin' });
            console.log('Seeded Admin User (admin@narayan.com / admin123)');
        }

        // Seed Homepage Stats & Text
        const homeContentExists = await Content.findOne({ key: 'homepage' });
        if (!homeContentExists) {
            await Content.create({
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
        const productsCount = await Product.countDocuments();
        if (productsCount === 0) {
            await Product.insertMany([
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
    } catch (err) {
        console.error('Seeding Error:', err);
    }
};

if (require.main === module) {
    seedDB().then(() => mongoose.connection.close());
}
