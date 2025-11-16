import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { type Application } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import { errorHandler, notFoundHandler } from './common/middlewares/error.middleware.js';
import { apiRateLimiter } from './common/middlewares/rate-limit.middleware.js';
import { API_VERSION } from './config/constants.js';
import { env } from './config/env.js';

// Import routes
import authRoutes from './modules/auth/auth.routes.js';
import userRoutes from './modules/users/users.routes.js';

/**
 * Create and configure Express application
 */
export function createApp(): Application {
  const app = express();

  // Security middleware
  app.use(helmet());

  // CORS configuration
  app.use(
    cors({
      origin: env.CORS_ORIGIN,
      credentials: true,
    })
  );

  // Body parsing middleware
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));
  app.use(cookieParser());

  // Compression middleware
  app.use(compression());

  // Logging middleware
  if (env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  } else {
    app.use(morgan('combined'));
  }

  // Rate limiting
  app.use(apiRateLimiter);

  // Health check endpoint
  app.get('/health', (_req, res) => {
    res.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: env.NODE_ENV,
    });
  });

  // API routes
  const apiRouter = express.Router();

  apiRouter.use('/auth', authRoutes);
  apiRouter.use('/users', userRoutes);

  app.use(`/api/${API_VERSION}`, apiRouter);

  // 404 handler (must be after all routes)
  app.use(notFoundHandler);

  // Error handler (must be last)
  app.use(errorHandler);

  return app;
}
