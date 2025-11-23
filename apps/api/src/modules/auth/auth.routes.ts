import { createUserFromRegisterSchema, loginSchema } from '@repo/types';
import { Router } from 'express';

import * as authController from './auth.controller.js';

import { authRateLimiter } from '@/common/middlewares/rate-limit.middleware.js';
import { validate } from '@/common/middlewares/validate.middleware.js';

const router = Router();

/**
 * Auth routes with rate limiting
 */
router.post(
  '/register',
  authRateLimiter,
  validate(createUserFromRegisterSchema),
  authController.register
);

router.post('/login', authRateLimiter, validate(loginSchema), authController.login);

router.post('/refresh', authController.refreshToken);

router.post('/logout', authController.logout);

export default router;
