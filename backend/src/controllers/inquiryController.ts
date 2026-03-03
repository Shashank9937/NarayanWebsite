import { Request, Response } from 'express';
import Inquiry from '../models/Inquiry';
import nodemailer from 'nodemailer';

export const createInquiry = async (req: Request, res: Response) => {
    try {
        const inquiryData = req.body;
        const newInquiry = new Inquiry(inquiryData);
        await newInquiry.save();

        // Optional: Send email alert (configured via ENV)
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
                subject: `New Enterprise Inquiry: ${inquiryData.organizationName}`,
                text: `New inquiry received from ${inquiryData.procurementHead} at ${inquiryData.organizationName}.\nMonthly Requirement: ${inquiryData.monthlyRequirement}\nLocation: ${inquiryData.location}`,
            };

            await transporter.sendMail(mailOptions);
        }

        res.status(201).json({ message: 'Inquiry submitted successfully', id: newInquiry._id });
    } catch (error) {
        console.error('Error creating inquiry:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getInquiries = async (req: Request, res: Response) => {
    try {
        const inquiries = await Inquiry.find().sort({ createdAt: -1 });
        res.status(200).json(inquiries);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
