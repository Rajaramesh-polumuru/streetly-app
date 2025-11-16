import { describe, it, expect } from '@jest/globals';
import { ApiResponse } from '../../src/common/utils/api-response.js';
import { AppError } from '../../src/common/utils/app-error.js';

describe('ApiResponse', () => {
  it('should create a success response', () => {
    const response = ApiResponse.success({ id: 1 }, 'Success', 200);

    expect(response.success).toBe(true);
    expect(response.data).toEqual({ id: 1 });
    expect(response.message).toBe('Success');
    expect(response.statusCode).toBe(200);
  });

  it('should create an error response', () => {
    const response = ApiResponse.error('Error occurred', 400);

    expect(response.success).toBe(false);
    expect(response.message).toBe('Error occurred');
    expect(response.statusCode).toBe(400);
  });
});

describe('AppError', () => {
  it('should create an AppError with default values', () => {
    const error = new AppError('Test error');

    expect(error.message).toBe('Test error');
    expect(error.statusCode).toBe(500);
    expect(error.isOperational).toBe(true);
  });

  it('should create an AppError with custom values', () => {
    const error = new AppError('Not found', 404, false);

    expect(error.message).toBe('Not found');
    expect(error.statusCode).toBe(404);
    expect(error.isOperational).toBe(false);
  });
});

