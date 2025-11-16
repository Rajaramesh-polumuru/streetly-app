import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { AppError } from '../utils/app-error.js';
import { asyncHandler } from '../utils/async-handler.js';

import { HTTP_STATUS } from '@/config/constants.js';
import { env } from '@/config/env.js';

interface JwtPayload {
  id: string;
  email: string;
  role?: string;
}

// Extend Express Request type
declare module 'express-serve-static-core' {
  interface Request {
    user?: JwtPayload;
  }
}

/**
 * Authentication middleware - validates JWT token
 */
export const authenticate = asyncHandler(
  async (req: Request, _res: Response, next: NextFunction) => {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new AppError('No token provided', HTTP_STATUS.UNAUTHORIZED);
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix

    try {
      // Verify token
      const decoded = jwt.verify(token, env.JWT_SECRET) as JwtPayload;

      // Attach user to request
      req.user = decoded;

      next();
    } catch {
      throw new AppError('Invalid or expired token', HTTP_STATUS.UNAUTHORIZED);
    }
  }
);

/**
 * Authorization middleware - checks user role
 */
export const authorize = (...roles: string[]) => {
  return (req: Request, _res: Response, next: NextFunction): void => {
    try {
      if (!req.user) {
        throw new AppError('User not authenticated', HTTP_STATUS.UNAUTHORIZED);
      }

      if (!req.user.role || !roles.includes(req.user.role)) {
        throw new AppError(
          'You do not have permission to perform this action',
          HTTP_STATUS.FORBIDDEN
        );
      }

      next();
    } catch (err) {
      next(err);
    }
  };
};
