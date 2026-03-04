"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getProducts = void 0;
const Product_1 = require("../models/Product");
const getProducts = async (req, res) => {
    try {
        const products = await Product_1.Product.find().sort({ createdAt: -1 });
        res.json(products);
    }
    catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};
exports.getProducts = getProducts;
const getProductById = async (req, res) => {
    try {
        const product = await Product_1.Product.findById(req.params.id);
        if (!product) {
            res.status(404).json({ message: 'Not found' });
            return;
        }
        res.json(product);
    }
    catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};
exports.getProductById = getProductById;
const createProduct = async (req, res) => {
    try {
        const product = await Product_1.Product.create(req.body);
        res.status(201).json(product);
    }
    catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};
exports.createProduct = createProduct;
const updateProduct = async (req, res) => {
    try {
        const product = await Product_1.Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) {
            res.status(404).json({ message: 'Not found' });
            return;
        }
        res.json(product);
    }
    catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};
exports.updateProduct = updateProduct;
const deleteProduct = async (req, res) => {
    try {
        const product = await Product_1.Product.findByIdAndDelete(req.params.id);
        if (!product) {
            res.status(404).json({ message: 'Not found' });
            return;
        }
        res.json({ message: 'Deleted' });
    }
    catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};
exports.deleteProduct = deleteProduct;
