import express from 'express';
import { getContent, updateContent } from '../controllers/contentController';
import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/:key', getContent);
router.put('/:key', authenticateToken, updateContent);

export default router;
