import type { ApiResponse as IApiResponse, ValidationError } from '@repo/types';

/**
 * Standardized API response utility
 */
export class ApiResponse {
  /**
   * Success response
   */
  static success<T>(data: T, message = 'Success', statusCode = 200): IApiResponse<T> {
    return {
      success: true,
      data,
      message,
      statusCode,
    };
  }

  /**
   * Error response
   */
  static error(
    message: string,
    statusCode = 500,
    errors: ValidationError[] = []
  ): IApiResponse<never> {
    return {
      success: false,
      message,
      statusCode,
      errors,
    };
  }

  /**
   * Paginated response
   */
  static paginated<T>(
    data: T[],
    page: number,
    limit: number,
    total: number,
    message = 'Success'
  ): IApiResponse<T[]> {
    const totalPages = Math.ceil(total / limit);

    return {
      success: true,
      data,
      message,
      statusCode: 200,
    };
  }
}
