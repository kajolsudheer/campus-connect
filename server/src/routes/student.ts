import { Router, Request, Response } from 'express';
import { authenticate, authorize } from '../middlewares/authMiddleware';
import prisma from '../config/prisma';

const router = Router();
router.use(authenticate);

router.get('/dashboard', authorize(['STUDENT']), async (req: Request, res: Response): Promise<void> => {
    try {
        // Fetch basic stats for student dashboard
        // 1. Profile details
        // 2. Recent notifications
        // 3. Upcoming exams/assignments
        res.json({ message: 'Student dashboard data' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch dashboard' });
    }
});

router.get('/timetable', authorize(['STUDENT']), async (req: Request, res: Response): Promise<void> => {
    try {
        res.json({ message: 'Student timetable' });
    } catch (error) {
        res.status(500).json({ error: 'Failed' });
    }
});

router.get('/attendance', authorize(['STUDENT']), async (req: Request, res: Response): Promise<void> => {
    try {
        res.json({ message: 'Student attendance' });
    } catch (error) {
        res.status(500).json({ error: 'Failed' });
    }
});

// Other routes (assignments, materials, leaves) will be added here
export default router;
