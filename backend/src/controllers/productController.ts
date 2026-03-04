import { Request, Response } from 'express';
import { Product } from '../models/Product';

export const getProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await Product.find().sort({ createdAt: -1 });
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};

export const getProductById = async (req: Request, res: Response): Promise<void> => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) { res.status(404).json({ message: 'Not found' }); return; }
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};

export const createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};

export const updateProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) { res.status(404).json({ message: 'Not found' }); return; }
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};

export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) { res.status(404).json({ message: 'Not found' }); return; }
        res.json({ message: 'Deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};
