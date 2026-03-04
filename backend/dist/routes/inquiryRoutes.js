"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const inquiryController_1 = require("../controllers/inquiryController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.post('/', inquiryController_1.submitInquiry); // Public endpoint
router.get('/', authMiddleware_1.authenticateToken, inquiryController_1.getInquiries); // Admin only
router.put('/:id/status', authMiddleware_1.authenticateToken, inquiryController_1.updateInquiryStatus); // Admin only
exports.default = router;
