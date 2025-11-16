import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import type { LoginDto } from '@repo/types';

import { UserRepository } from '../users/users.repository.js';
import { AppError } from '@/common/utils/app-error.js';
import { env } from '@/config/env.js';
import { HTTP_STATUS } from '@/config/constants.js';

/**
 * Auth service - handles authentication logic
 */
export class AuthService {
  constructor(private userRepository: UserRepository) {}

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
      id: user._id.toString(),
      email: user.email,
      role: user.role,
    });

    const refreshToken = this.generateRefreshToken({
      id: user._id.toString(),
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
        id: user._id.toString(),
        email: user.email,
        role: user.role,
      });

      return {
        accessToken: newAccessToken,
      };
    } catch (error) {
      throw new AppError('Invalid refresh token', HTTP_STATUS.UNAUTHORIZED);
    }
  }

  /**
   * Generate JWT access token
   */
  private generateAccessToken(payload: { id: string; email: string; role?: string }): string {
    return jwt.sign(payload, env.JWT_SECRET, {
      expiresIn: env.JWT_EXPIRES_IN,
    });
  }

  /**
   * Generate JWT refresh token
   */
  private generateRefreshToken(payload: { id: string }): string {
    return jwt.sign(payload, env.JWT_REFRESH_SECRET, {
      expiresIn: env.JWT_REFRESH_EXPIRES_IN,
    });
  }
}
