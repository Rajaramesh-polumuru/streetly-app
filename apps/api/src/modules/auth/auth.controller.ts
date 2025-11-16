import type { Request, Response } from 'express';

import { UserRepository } from '../users/users.repository.js';

import { AuthService } from './auth.service.js';

import { ApiResponse } from '@/common/utils/api-response.js';
import { asyncHandler } from '@/common/utils/async-handler.js';
import { HTTP_STATUS } from '@/config/constants.js';

// Instantiate repository and service
const userRepository = new UserRepository();
const authService = new AuthService(userRepository);

/**
 * Register a new user
 * POST /api/v1/auth/register
 */
export const register = asyncHandler(async (req: Request, res: Response) => {
  const result = await authService.register(req.body);

  res.status(HTTP_STATUS.CREATED).json(ApiResponse.success(result, 'Registration successful'));
});

/**
 * Login user
 * POST /api/v1/auth/login
 */
export const login = asyncHandler(async (req: Request, res: Response) => {
  const result = await authService.login(req.body);

  res.json(ApiResponse.success(result, 'Login successful'));
});

/**
 * Refresh access token
 * POST /api/v1/auth/refresh
 */
export const refreshToken = asyncHandler(async (req: Request, res: Response) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    res
      .status(HTTP_STATUS.BAD_REQUEST)
      .json(ApiResponse.error('Refresh token is required', HTTP_STATUS.BAD_REQUEST));
    return;
  }

  const result = await authService.refreshToken(refreshToken);

  res.json(ApiResponse.success(result, 'Token refreshed successfully'));
});

/**
 * Logout user (placeholder - client-side token deletion)
 * POST /api/v1/auth/logout
 */
export const logout = asyncHandler(async (_req: Request, res: Response) => {
  // In a more advanced setup, you would invalidate the refresh token here
  // For now, this is a placeholder - actual logout happens client-side

  res.json(ApiResponse.success(null, 'Logout successful'));
});
