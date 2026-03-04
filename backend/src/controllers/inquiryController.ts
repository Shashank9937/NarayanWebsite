import { Request, Response } from 'express';
import { Inquiry } from '../models/Inquiry';

export const submitInquiry = async (req: Request, res: Response): Promise<void> => {
    try {
        const inquiry = await Inquiry.create(req.body);
        res.status(201).json({ message: 'Inquiry submitted', inquiry });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};

export const getInquiries = async (req: Request, res: Response): Promise<void> => {
    try {
        const inquiries = await Inquiry.find().sort({ createdAt: -1 });
        res.json(inquiries);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};

export const updateInquiryStatus = async (req: Request, res: Response): Promise<void> => {
    try {
        const { status } = req.body;
        const inquiry = await Inquiry.findByIdAndUpdate(req.params.id, { status }, { new: true });
        if (!inquiry) { res.status(404).json({ message: 'Not found' }); return; }
        res.json(inquiry);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};
