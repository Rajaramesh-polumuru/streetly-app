import bcrypt from 'bcrypt';
import type { CreateUserDto, UpdateUserDto } from '@repo/types';

import { UserRepository } from './users.repository.js';
import { AppError } from '@/common/utils/app-error.js';
import { HTTP_STATUS } from '@/config/constants.js';

/**
 * User service - contains business logic for user operations
 */
export class UserService {
  constructor(private userRepository: UserRepository) {}

  /**
   * Get user by ID
   */
  async getUserById(id: string) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError('User not found', HTTP_STATUS.NOT_FOUND);
    }

    return user;
  }

  /**
   * Get all users with pagination
   */
  async getAllUsers(page = 1, limit = 10) {
    const { users, total } = await this.userRepository.findAll(page, limit);

    return {
      users,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        hasNextPage: page * limit < total,
        hasPrevPage: page > 1,
      },
    };
  }

  /**
   * Create a new user
   */
  async createUser(data: CreateUserDto) {
    // Check if email already exists
    const emailExists = await this.userRepository.emailExists(data.email);

    if (emailExists) {
      throw new AppError('Email already registered', HTTP_STATUS.CONFLICT);
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, 12);

    // Create user
    const user = await this.userRepository.create({
      ...data,
      password: hashedPassword,
    });

    return user;
  }

  /**
   * Update user
   */
  async updateUser(id: string, data: UpdateUserDto) {
    // Check if user exists
    const existingUser = await this.userRepository.findById(id);

    if (!existingUser) {
      throw new AppError('User not found', HTTP_STATUS.NOT_FOUND);
    }

    // Check if email is being updated and if it's already taken
    if (data.email && data.email !== existingUser.email) {
      const emailExists = await this.userRepository.emailExists(data.email);

      if (emailExists) {
        throw new AppError('Email already taken', HTTP_STATUS.CONFLICT);
      }
    }

    // Hash password if being updated
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 12);
    }

    const updatedUser = await this.userRepository.update(id, data);

    return updatedUser;
  }

  /**
   * Delete user
   */
  async deleteUser(id: string) {
    // Check if user exists
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError('User not found', HTTP_STATUS.NOT_FOUND);
    }

    const deleted = await this.userRepository.delete(id);

    if (!deleted) {
      throw new AppError('Failed to delete user', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }

    return { message: 'User deleted successfully' };
  }
}
