import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    company: { type: String },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    requirement: { type: String, required: true },
    status: { type: String, default: 'new' }, // new, contacted, closed
}, { timestamps: true });

export const Inquiry = mongoose.model('Inquiry', inquirySchema);
