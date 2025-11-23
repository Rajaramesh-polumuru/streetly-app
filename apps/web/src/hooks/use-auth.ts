import type { RegisterDto, LoginDto, AuthResponse, ApiResponse } from '@repo/types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { ROUTES, QUERY_KEYS } from '@/config/constants';
import { apiClient } from '@/lib/api-client';
import { useAuthStore } from '@/stores/auth-store';

/**
 * Register mutation
 */
export function useRegister() {
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: async (data: Omit<RegisterDto, 'confirmPassword'>) => {
      const response = await apiClient.post<ApiResponse<AuthResponse>>('/auth/register', data);
      if (!response.data?.data) {
        throw new Error('Registration failed');
      }
      return response.data.data;
    },
    onSuccess: (data) => {
      setAuth(data.user, data.tokens);
      router.push(ROUTES.DASHBOARD);
    },
  });
}

/**
 * Login mutation
 */
export function useLogin() {
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: async (data: LoginDto) => {
      const response = await apiClient.post<ApiResponse<AuthResponse>>('/auth/login', data);
      if (!response.data?.data) {
        throw new Error('Login failed');
      }
      return response.data.data;
    },
    onSuccess: (data) => {
      setAuth(data.user, data.tokens);
      router.push(ROUTES.DASHBOARD);
    },
  });
}

/**
 * Logout mutation
 */
export function useLogout() {
  const router = useRouter();
  const clearAuth = useAuthStore((state) => state.clearAuth);

  return useMutation({
    mutationFn: async () => {
      await apiClient.post('/auth/logout');
    },
    onSuccess: () => {
      clearAuth();
      router.push(ROUTES.LOGIN);
    },
  });
}

/**
 * Get current user query
 */
export function useMe() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return useQuery({
    queryKey: [QUERY_KEYS.ME],
    queryFn: async () => {
      const response = await apiClient.get('/users/me');
      return response.data;
    },
    enabled: isAuthenticated,
  });
}
