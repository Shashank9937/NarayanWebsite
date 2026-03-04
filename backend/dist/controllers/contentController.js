"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateContent = exports.getContent = void 0;
const Content_1 = require("../models/Content");
const getContent = async (req, res) => {
    try {
        const { key } = req.params;
        const doc = await Content_1.Content.findOne({ key });
        if (!doc) {
            res.status(404).json({ message: 'Content not found' });
            return;
        }
        res.json(doc.value);
    }
    catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};
exports.getContent = getContent;
const updateContent = async (req, res) => {
    try {
        const { key } = req.params;
        const updated = await Content_1.Content.findOneAndUpdate({ key }, { value: req.body }, { new: true, upsert: true });
        res.json(updated.value);
    }
    catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};
exports.updateContent = updateContent;
