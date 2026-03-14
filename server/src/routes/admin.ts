import { Router, Request, Response } from 'express';
import { authenticate, authorize } from '../middlewares/authMiddleware';

const router = Router();
router.use(authenticate);
router.use(authorize(['ADMIN']));

router.get('/dashboard', async (req: Request, res: Response): Promise<void> => {
    res.json({ message: 'Admin dashboard data' });
});

router.post('/create-user', async (req: Request, res: Response): Promise<void> => {
    res.json({ message: 'User created by admin' });
});

export default router;
