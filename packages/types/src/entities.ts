/**
 * User entity
 */
export interface User {
  id: string;
  email: string;
  name: string;
  role?: 'user' | 'admin';
  restaurantName?: string;
  phone?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Auth tokens
 */
export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

/**
 * Auth response
 */
export interface AuthResponse {
  user: User;
  tokens: AuthTokens;
}
