import type { ApiResponse, ApiError } from '@repo/types';
import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosError } from 'axios';

/**
 * API Client class for making HTTP requests
 */
class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  /**
   * Setup request and response interceptors
   */
  private setupInterceptors(): void {
    // Request interceptor - add auth token
    this.client.interceptors.request.use(
      (config) => {
        if (typeof window !== 'undefined') {
          const token = localStorage.getItem('access_token');

          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor - handle errors
    this.client.interceptors.response.use(
      (response) => response.data,
      async (error: AxiosError<ApiResponse>) => {
        const apiError = this.normalizeError(error);

        // Handle 401 - token expired
        if (error.response?.status === 401) {
          // Try to refresh token
          const refreshed = await this.refreshToken();

          if (refreshed && error.config) {
            // Retry original request
            return this.client.request(error.config);
          }

          // Clear tokens and redirect to login
          if (typeof window !== 'undefined') {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            window.location.href = '/auth/login';
          }
        }

        return Promise.reject(apiError);
      }
    );
  }

  /**
   * Normalize error response
   */
  private normalizeError(error: AxiosError<ApiResponse>): ApiError {
    if (error.response?.data) {
      return {
        message: error.response.data.message || 'An error occurred',
        statusCode: error.response.status,
        errors: error.response.data.errors,
      };
    }

    return {
      message: error.message || 'Network error',
      statusCode: 0,
    };
  }

  /**
   * Refresh access token
   */
  private async refreshToken(): Promise<boolean> {
    try {
      if (typeof window === 'undefined') return false;

      const refreshToken = localStorage.getItem('refresh_token');

      if (!refreshToken) return false;

      const response = await axios.post<ApiResponse<{ accessToken: string }>>(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
        { refreshToken }
      );

      if (response.data.data?.accessToken) {
        localStorage.setItem('access_token', response.data.data.accessToken);
        return true;
      }

      return false;
    } catch {
      return false;
    }
  }

  /**
   * GET request
   */
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.client.get<never, ApiResponse<T>>(url, config);
  }

  /**
   * POST request
   */
  async post<T, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.client.post<D, ApiResponse<T>>(url, data, config);
  }

  /**
   * PATCH request
   */
  async patch<T, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.client.patch<D, ApiResponse<T>>(url, data, config);
  }

  /**
   * DELETE request
   */
  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.client.delete<never, ApiResponse<T>>(url, config);
  }
}

// Export singleton instance
export const apiClient = new ApiClient();
