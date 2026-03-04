import { Request, Response } from 'express';
import { Content } from '../models/Content';

export const getContent = async (req: Request, res: Response): Promise<void> => {
    try {
        const { key } = req.params;
        const doc = await Content.findOne({ key });
        if (!doc) {
            res.status(404).json({ message: 'Content not found' });
            return;
        }
        res.json(doc.value);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};

export const updateContent = async (req: Request, res: Response): Promise<void> => {
    try {
        const { key } = req.params;
        const updated = await Content.findOneAndUpdate(
            { key },
            { value: req.body },
            { new: true, upsert: true }
        );
        res.json(updated.value);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};
