import { Router } from 'express';
import { loginSchema } from '@repo/types';

import * as authController from './auth.controller.js';
import { validate } from '@/common/middlewares/validate.middleware.js';
import { authRateLimiter } from '@/common/middlewares/rate-limit.middleware.js';

const router = Router();

/**
 * Auth routes with rate limiting
 */
router.post('/login', authRateLimiter, validate(loginSchema), authController.login);

router.post('/refresh', authController.refreshToken);

router.post('/logout', authController.logout);

export default router;
