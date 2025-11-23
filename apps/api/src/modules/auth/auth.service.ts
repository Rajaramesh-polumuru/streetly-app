import type { LoginDto } from '@repo/types';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import type { UserRepository } from '../users/users.repository.js';

import { AppError } from '@/common/utils/app-error.js';
import { HTTP_STATUS } from '@/config/constants.js';
import { env } from '@/config/env.js';

/**
 * Auth service - handles authentication logic
 */
export class AuthService {
  constructor(private userRepository: UserRepository) {}

  /**
   * Register a new user
   */
  async register(data: {
    email: string;
    password: string;
    name: string;
    restaurantName?: string;
    phone?: string;
  }) {
    // Check if email already exists
    const existingUser = await this.userRepository.findByEmail(data.email);

    if (existingUser) {
      throw new AppError('Email already registered', HTTP_STATUS.CONFLICT);
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Create user
    const user = await this.userRepository.create({
      ...data,
      password: hashedPassword,
    });

    // Generate tokens
    const accessToken = this.generateAccessToken({
      id: (user._id as any).toString(),
      email: user.email,
      role: user.role,
    });

    const refreshToken = this.generateRefreshToken({
      id: (user._id as any).toString(),
    });

    // Remove password from user object
    const userObject = user.toJSON();

    return {
      user: userObject,
      tokens: {
        accessToken,
        refreshToken,
      },
    };
  }

  /**
   * Login user
   */
  async login(data: LoginDto) {
    // Find user with password
    const user = await this.userRepository.findByEmail(data.email, true);

    if (!user) {
      throw new AppError('Invalid credentials', HTTP_STATUS.UNAUTHORIZED);
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(data.password, user.password);

    if (!isPasswordValid) {
      throw new AppError('Invalid credentials', HTTP_STATUS.UNAUTHORIZED);
    }

    // Generate tokens
    const accessToken = this.generateAccessToken({
      id: (user._id as any).toString(),
      email: user.email,
      role: user.role,
    });

    const refreshToken = this.generateRefreshToken({
      id: (user._id as any).toString(),
    });

    // Remove password from user object
    const userObject = user.toJSON();

    return {
      user: userObject,
      tokens: {
        accessToken,
        refreshToken,
      },
    };
  }

  /**
   * Refresh access token
   */
  async refreshToken(refreshToken: string) {
    try {
      // Verify refresh token
      const decoded = jwt.verify(refreshToken, env.JWT_REFRESH_SECRET) as { id: string };

      // Get user
      const user = await this.userRepository.findById(decoded.id);

      if (!user) {
        throw new AppError('User not found', HTTP_STATUS.UNAUTHORIZED);
      }

      // Generate new access token
      const newAccessToken = this.generateAccessToken({
        id: (user._id as any).toString(),
        email: user.email,
        role: user.role,
      });

      return {
        accessToken: newAccessToken,
      };
    } catch {
      throw new AppError('Invalid refresh token', HTTP_STATUS.UNAUTHORIZED);
    }
  }

  /**
   * Generate JWT access token
   */
  private generateAccessToken(payload: { id: string; email: string; role?: string }): string {
    return jwt.sign(payload, env.JWT_SECRET, {
      expiresIn: env.JWT_EXPIRES_IN,
    } as jwt.SignOptions);
  }

  /**
   * Generate JWT refresh token
   */
  private generateRefreshToken(payload: { id: string }): string {
    return jwt.sign(payload, env.JWT_REFRESH_SECRET, {
      expiresIn: env.JWT_REFRESH_EXPIRES_IN,
    } as jwt.SignOptions);
  }
}
