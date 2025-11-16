/**
 * Application constants
 */

export const APP_NAME = 'MERN Monorepo';
export const APP_DESCRIPTION = 'Production-ready MERN stack application';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
} as const;

export const QUERY_KEYS = {
  USERS: 'users',
  USER: 'user',
  ME: 'me',
} as const;

