import type { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import { ZodError } from 'zod';

import { ApiResponse } from '../utils/api-response.js';
import { AppError } from '../utils/app-error.js';

import { HTTP_STATUS } from '@/config/constants.js';
import { env } from '@/config/env.js';


/**
 * Global error handler middleware
 */
export const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error('Error:', {
    name: error.name,
    message: error.message,
    stack: env.NODE_ENV === 'development' ? error.stack : undefined,
  });

  // Zod validation errors
  if (error instanceof ZodError) {
    const validationErrors = error.errors.map((err) => ({
      path: err.path,
      message: err.message,
    }));

    return res
      .status(HTTP_STATUS.BAD_REQUEST)
      .json(
        ApiResponse.error('Validation error', HTTP_STATUS.BAD_REQUEST, validationErrors)
      );
  }

  // Mongoose validation errors
  if (error instanceof mongoose.Error.ValidationError) {
    const validationErrors = Object.values(error.errors).map((err) => ({
      path: [err.path],
      message: err.message,
    }));

    return res
      .status(HTTP_STATUS.BAD_REQUEST)
      .json(
        ApiResponse.error('Validation error', HTTP_STATUS.BAD_REQUEST, validationErrors)
      );
  }

  // Mongoose duplicate key error
  if (error.name === 'MongoServerError' && 'code' in error && error.code === 11000) {
    return res
      .status(HTTP_STATUS.CONFLICT)
      .json(ApiResponse.error('Duplicate field value', HTTP_STATUS.CONFLICT));
  }

  // Mongoose cast error (invalid ObjectId)
  if (error instanceof mongoose.Error.CastError) {
    return res
      .status(HTTP_STATUS.BAD_REQUEST)
      .json(ApiResponse.error('Invalid ID format', HTTP_STATUS.BAD_REQUEST));
  }

  // Custom AppError
  if (error instanceof AppError) {
    return res
      .status(error.statusCode)
      .json(ApiResponse.error(error.message, error.statusCode));
  }

  // JWT errors
  if (error.name === 'JsonWebTokenError') {
    return res
      .status(HTTP_STATUS.UNAUTHORIZED)
      .json(ApiResponse.error('Invalid token', HTTP_STATUS.UNAUTHORIZED));
  }

  if (error.name === 'TokenExpiredError') {
    return res
      .status(HTTP_STATUS.UNAUTHORIZED)
      .json(ApiResponse.error('Token expired', HTTP_STATUS.UNAUTHORIZED));
  }

  // Default error
  res
    .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
    .json(
      ApiResponse.error(
        env.NODE_ENV === 'development' ? error.message : 'Internal server error',
        HTTP_STATUS.INTERNAL_SERVER_ERROR
      )
    );
};

/**
 * 404 Not Found handler
 */
export const notFoundHandler = (req: Request, res: Response) => {
  res
    .status(HTTP_STATUS.NOT_FOUND)
    .json(
      ApiResponse.error(`Route ${req.originalUrl} not found`, HTTP_STATUS.NOT_FOUND)
    );
};
