import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    shortDescription: { type: String },
    imageUrl: { type: String, required: true },
    features: [String],
}, { timestamps: true });

export const Product = mongoose.model('Product', productSchema);
