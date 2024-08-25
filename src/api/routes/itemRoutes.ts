import { Router } from 'express';
import { getItemsByDateRange, getItemsByCategory, addItem } from '../controllers/itemController.js';

const router = Router();

router.post('/add-item', addItem);
router.get('/date-range', getItemsByDateRange);
router.get('/category', getItemsByCategory);

export default router;

