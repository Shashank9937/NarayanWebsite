import mongoose, { Schema, Document } from 'mongoose';

export interface IInquiry extends Document {
    organizationName: string;
    procurementHead: string;
    email: string;
    phone: string;
    monthlyRequirement: string;
    fuelType: string;
    location: string;
    message: string;
    status: 'pending' | 'reviewed' | 'contacted';
    createdAt: Date;
}

const InquirySchema: Schema = new Schema({
    organizationName: { type: String, required: true },
    procurementHead: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    monthlyRequirement: { type: String, required: true },
    fuelType: { type: String, required: true },
    location: { type: String, required: true },
    message: { type: String },
    status: { type: String, enum: ['pending', 'reviewed', 'contacted'], default: 'pending' },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IInquiry>('Inquiry', InquirySchema);
