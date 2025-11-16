import { Router } from 'express';
import { createUserSchema, updateUserSchema, paginationSchema } from '@repo/types';

import * as userController from './users.controller.js';
import { validate } from '@/common/middlewares/validate.middleware.js';
import { authenticate, authorize } from '@/common/middlewares/auth.middleware.js';
import { USER_ROLES } from '@/config/constants.js';

const router = Router();

/**
 * Public routes (admin only)
 */
router
  .route('/')
  .get(
    authenticate,
    authorize(USER_ROLES.ADMIN),
    validate(paginationSchema, 'query'),
    userController.getUsers
  )
  .post(validate(createUserSchema), userController.createUser);

/**
 * Get current user profile
 */
router.get('/me', authenticate, userController.getMe);

/**
 * User-specific routes
 */
router
  .route('/:id')
  .get(authenticate, userController.getUser)
  .patch(authenticate, validate(updateUserSchema), userController.updateUser)
  .delete(authenticate, authorize(USER_ROLES.ADMIN), userController.deleteUser);

export default router;
