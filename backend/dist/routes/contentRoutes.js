"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contentController_1 = require("../controllers/contentController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.get('/:key', contentController_1.getContent);
router.put('/:key', authMiddleware_1.authenticateToken, contentController_1.updateContent);
exports.default = router;
