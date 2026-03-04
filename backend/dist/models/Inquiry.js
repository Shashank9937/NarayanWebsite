"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inquiry = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const inquirySchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    company: { type: String },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    requirement: { type: String, required: true },
    status: { type: String, default: 'new' }, // new, contacted, closed
}, { timestamps: true });
exports.Inquiry = mongoose_1.default.model('Inquiry', inquirySchema);
