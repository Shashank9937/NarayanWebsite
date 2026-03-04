"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateInquiryStatus = exports.getInquiries = exports.submitInquiry = void 0;
const Inquiry_1 = require("../models/Inquiry");
const submitInquiry = async (req, res) => {
    try {
        const inquiry = await Inquiry_1.Inquiry.create(req.body);
        res.status(201).json({ message: 'Inquiry submitted', inquiry });
    }
    catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};
exports.submitInquiry = submitInquiry;
const getInquiries = async (req, res) => {
    try {
        const inquiries = await Inquiry_1.Inquiry.find().sort({ createdAt: -1 });
        res.json(inquiries);
    }
    catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};
exports.getInquiries = getInquiries;
const updateInquiryStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const inquiry = await Inquiry_1.Inquiry.findByIdAndUpdate(req.params.id, { status }, { new: true });
        if (!inquiry) {
            res.status(404).json({ message: 'Not found' });
            return;
        }
        res.json(inquiry);
    }
    catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};
exports.updateInquiryStatus = updateInquiryStatus;
