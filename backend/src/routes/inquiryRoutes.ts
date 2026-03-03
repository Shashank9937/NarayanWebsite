import { Router } from 'express';
import { createInquiry, getInquiries } from '../controllers/inquiryController';

const router = Router();

router.post('/', createInquiry);
router.get('/', getInquiries); // Note: Should be protected in production

export default router;
