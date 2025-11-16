import type { Request, Response } from 'express';

import { UserRepository } from './users.repository.js';
import { UserService } from './users.service.js';

import { ApiResponse } from '@/common/utils/api-response.js';
import { asyncHandler } from '@/common/utils/async-handler.js';
import { HTTP_STATUS } from '@/config/constants.js';

// Instantiate repository and service
const userRepository = new UserRepository();
const userService = new UserService(userRepository);

/**
 * Get all users
 * GET /api/v1/users
 */
export const getUsers = asyncHandler(async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;

  const result = await userService.getAllUsers(page, limit);

  res.json(ApiResponse.success(result, 'Users retrieved successfully'));
});

/**
 * Get user by ID
 * GET /api/v1/users/:id
 */
export const getUser = asyncHandler(async (req: Request, res: Response) => {
  const user = await userService.getUserById(req.params.id);

  res.json(ApiResponse.success(user, 'User retrieved successfully'));
});

/**
 * Create new user
 * POST /api/v1/users
 */
export const createUser = asyncHandler(async (req: Request, res: Response) => {
  const user = await userService.createUser(req.body);

  res
    .status(HTTP_STATUS.CREATED)
    .json(ApiResponse.success(user, 'User created successfully', HTTP_STATUS.CREATED));
});

/**
 * Update user
 * PATCH /api/v1/users/:id
 */
export const updateUser = asyncHandler(async (req: Request, res: Response) => {
  const user = await userService.updateUser(req.params.id, req.body);

  res.json(ApiResponse.success(user, 'User updated successfully'));
});

/**
 * Delete user
 * DELETE /api/v1/users/:id
 */
export const deleteUser = asyncHandler(async (req: Request, res: Response) => {
  const result = await userService.deleteUser(req.params.id);

  res.json(ApiResponse.success(result, result.message));
});

/**
 * Get current user profile
 * GET /api/v1/users/me
 */
export const getMe = asyncHandler(async (req: Request, res: Response) => {
  if (!req.user) {
    throw new Error('User not authenticated');
  }

  const user = await userService.getUserById(req.user.id);

  res.json(ApiResponse.success(user, 'Profile retrieved successfully'));
});
