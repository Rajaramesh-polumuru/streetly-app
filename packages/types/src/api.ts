/**
 * Standard API response wrapper
 */
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: ValidationError[];
  statusCode: number;
}

/**
 * API error response
 */
export interface ApiError {
  message: string;
  statusCode: number;
  errors?: ValidationError[];
}

/**
 * Validation error structure
 */
export interface ValidationError {
  path: (string | number)[];
  message: string;
}

/**
 * Pagination metadata
 */
export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

/**
 * Paginated response
 */
export interface PaginatedResponse<T> {
  data: T[];
  meta: PaginationMeta;
}
