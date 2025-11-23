import type { UpdateUserDto } from '@repo/types';

import { User, type IUser } from './users.model.js';

/**
 * User repository - handles all database operations for users
 */
export class UserRepository {
  /**
   * Find user by ID
   */
  async findById(id: string): Promise<IUser | null> {
    return User.findById(id);
  }

  /**
   * Find user by email
   */
  async findByEmail(email: string, includePassword = false): Promise<IUser | null> {
    const query = User.findOne({ email });
    if (includePassword) {
      query.select('+password');
    }
    return query;
  }

  /**
   * Find all users with pagination
   */
  async findAll(page = 1, limit = 10): Promise<{ users: IUser[]; total: number }> {
    const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
      User.find().skip(skip).limit(limit).sort({ createdAt: -1 }),
      User.countDocuments(),
    ]);

    return { users, total };
  }

  /**
   * Create a new user
   */
  async create(data: {
    email: string;
    password: string;
    name: string;
    role?: 'user' | 'admin';
    restaurantName?: string;
    phone?: string;
  }): Promise<IUser> {
    return User.create(data);
  }

  /**
   * Update user by ID
   */
  async update(id: string, data: Partial<UpdateUserDto>): Promise<IUser | null> {
    return User.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  }

  /**
   * Delete user by ID
   */
  async delete(id: string): Promise<boolean> {
    const result = await User.deleteOne({ _id: id });
    return result.deletedCount > 0;
  }

  /**
   * Check if email exists
   */
  async emailExists(email: string): Promise<boolean> {
    const count = await User.countDocuments({ email });
    return count > 0;
  }
}
