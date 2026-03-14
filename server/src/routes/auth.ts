import { Router } from 'express';
import { login, register } from '../controllers/authController';

const router = Router();

router.post('/login', login);
router.post('/register', register); // Normally only Admin can register users, but added for initial setup

export default router;
