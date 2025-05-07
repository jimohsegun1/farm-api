
import express from 'express';
import {
  getAllUsers,
  toggleUserBan,
  getAllProducts,
  deleteProduct
} from '../controllers/adminController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { authorizeRoles } from '../middlewares/roleMiddleware.js';

const router = express.Router();
router.use(protect, authorizeRoles('admin'));

router.get('/users', getAllUsers);
router.put('/users/:id/ban', toggleUserBan);
router.get('/products', getAllProducts);
router.delete('/products/:id', deleteProduct);

export default router;
