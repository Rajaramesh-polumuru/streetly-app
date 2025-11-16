/**
 * Application constants
 */

export const APP_NAME = 'Streetly';
export const APP_DESCRIPTION = 'Modern POS and Digital Menu Platform for Restaurants';
export const APP_TAGLINE = 'Transform Your Restaurant Operations with Smart Technology';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  // Restaurant Routes
  ONBOARDING: '/onboard',
  MENU: '/menu',
  ORDERS: '/orders',
  ANALYTICS: '/analytics',
  SETTINGS: '/settings',
} as const;

export const QUERY_KEYS = {
  USERS: 'users',
  USER: 'user',
  ME: 'me',
  RESTAURANTS: 'restaurants',
  RESTAURANT: 'restaurant',
  MENU_ITEMS: 'menuItems',
  ORDERS: 'orders',
  ANALYTICS: 'analytics',
} as const;

export const FEATURES = {
  QR_MENU: {
    title: 'QR-Based Digital Menu',
    description: 'Contactless ordering with beautiful, mobile-optimized menus',
    icon: 'qr-code',
  },
  ORDER_MANAGEMENT: {
    title: 'Smart Order Management',
    description: 'Real-time kitchen display and order tracking',
    icon: 'clipboard-list',
  },
  PAYMENT_INTEGRATION: {
    title: 'Seamless Payments',
    description: 'Integrated payment processing with Razorpay',
    icon: 'credit-card',
  },
  ANALYTICS: {
    title: 'Business Intelligence',
    description: 'Data-driven insights to grow your revenue',
    icon: 'chart-bar',
  },
  LOYALTY: {
    title: 'Customer Loyalty',
    description: 'Built-in rewards and membership programs',
    icon: 'heart',
  },
  INVENTORY: {
    title: 'Inventory Tracking',
    description: 'Never run out of your best-selling items',
    icon: 'package',
  },
} as const;

export const PRICING = {
  STARTER: {
    name: 'Starter',
    price: 2000,
    currency: 'INR',
    interval: 'month',
    features: [
      'Digital QR Menu',
      'Basic Order Management',
      'Up to 50 menu items',
      '1 Restaurant Location',
      'Email Support',
    ],
  },
  PROFESSIONAL: {
    name: 'Professional',
    price: 5000,
    currency: 'INR',
    interval: 'month',
    features: [
      'Everything in Starter',
      'Advanced Analytics',
      'Unlimited Menu Items',
      'Inventory Management',
      'Customer Loyalty Program',
      'Priority Support',
    ],
    recommended: true,
  },
  ENTERPRISE: {
    name: 'Enterprise',
    price: 10000,
    currency: 'INR',
    interval: 'month',
    features: [
      'Everything in Professional',
      'Multiple Locations',
      'Custom Branding',
      'API Access',
      'Dedicated Account Manager',
      '24/7 Phone Support',
    ],
  },
} as const;
