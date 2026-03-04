import express from 'express';
import { submitInquiry, getInquiries, updateInquiryStatus } from '../controllers/inquiryController';
import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/', submitInquiry); // Public endpoint
router.get('/', authenticateToken, getInquiries); // Admin only
router.put('/:id/status', authenticateToken, updateInquiryStatus); // Admin only

export default router;
