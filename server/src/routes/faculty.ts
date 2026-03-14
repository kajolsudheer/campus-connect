import { Router, Request, Response } from 'express';
import { authenticate, authorize } from '../middlewares/authMiddleware';

const router = Router();
router.use(authenticate);
router.use(authorize(['FACULTY', 'ADMIN']));

router.get('/dashboard', async (req: Request, res: Response): Promise<void> => {
    res.json({ message: 'Faculty dashboard data' });
});

router.post('/upload-material', async (req: Request, res: Response): Promise<void> => {
    res.json({ message: 'Material uploaded' });
});

router.post('/create-assignment', async (req: Request, res: Response): Promise<void> => {
    res.json({ message: 'Assignment created' });
});

export default router;
