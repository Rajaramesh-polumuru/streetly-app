'use client';

import type { CreateUserDto } from '@repo/types';
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle2,
  Code2,
  Eye,
  EyeOff,
  Loader2,
  UserPlus,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { ROUTES } from '@/config/constants';
import { useRegister } from '@/hooks/use-auth';

type RegisterFormData = CreateUserDto & { password: string; confirmPassword: string };

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>();
  const registerMutation = useRegister();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const password = watch('password');

  const onSubmit = (data: RegisterFormData) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...registerData } = data;
    registerMutation.mutate(registerData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 flex items-center justify-center px-4 py-12">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo & Back Link */}
        <div className="text-center mb-8 animate-fade-in">
          <Link
            href={ROUTES.HOME}
            className="inline-flex items-center space-x-2 mb-8 text-neutral-300 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to home</span>
          </Link>

          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center shadow-lg shadow-accent-500/30">
              <Code2 className="w-7 h-7 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-neutral-400">Join Streetly and start building today</p>
        </div>

        {/* Register Card */}
        <div className="bg-primary-800/50 backdrop-blur-xl rounded-2xl border border-primary-700/50 shadow-2xl p-8 animate-slide-up">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                {...register('name', {
                  required: 'Name is required',
                  minLength: { value: 2, message: 'Name must be at least 2 characters' },
                  maxLength: { value: 50, message: 'Name must not exceed 50 characters' },
                })}
                className="w-full px-4 py-3 bg-primary-900/50 border border-primary-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-error-400 text-sm mt-2 flex items-center space-x-1">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.name.message}</span>
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                className="w-full px-4 py-3 bg-primary-900/50 border border-primary-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-error-400 text-sm mt-2 flex items-center space-x-1">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.email.message}</span>
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neutral-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', {
                    required: 'Password is required',
                    minLength: { value: 8, message: 'Password must be at least 8 characters' },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                      message: 'Password must contain uppercase, lowercase, and number',
                    },
                  })}
                  className="w-full px-4 py-3 bg-primary-900/50 border border-primary-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all pr-12"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-error-400 text-sm mt-2 flex items-center space-x-1">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.password.message}</span>
                </p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  {...register('confirmPassword', {
                    required: 'Please confirm your password',
                    validate: (value) => value === password || 'Passwords do not match',
                  })}
                  className="w-full px-4 py-3 bg-primary-900/50 border border-primary-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all pr-12"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-300 transition-colors"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-error-400 text-sm mt-2 flex items-center space-x-1">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.confirmPassword.message}</span>
                </p>
              )}
            </div>

            {/* Password Requirements */}
            <div className="p-4 bg-primary-900/30 border border-primary-700/50 rounded-xl">
              <p className="text-xs font-semibold text-neutral-300 mb-2">Password requirements:</p>
              <ul className="text-xs text-neutral-400 space-y-1">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3 h-3 text-accent-400" />
                  <span>At least 8 characters long</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3 h-3 text-accent-400" />
                  <span>Contains uppercase and lowercase letters</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3 h-3 text-accent-400" />
                  <span>Contains at least one number</span>
                </li>
              </ul>
            </div>

            {/* Error Message */}
            {registerMutation.isError && (
              <div className="bg-error-500/10 border border-error-500/20 text-error-400 px-4 py-3 rounded-xl flex items-start space-x-2 animate-slide-down">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p className="text-sm">{registerMutation.error.message}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={registerMutation.isPending}
              className="w-full bg-accent-500 text-white py-3 px-4 rounded-xl font-semibold hover:bg-accent-600 transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {registerMutation.isPending ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Creating account...</span>
                </>
              ) : (
                <>
                  <UserPlus className="w-5 h-5" />
                  <span>Create Account</span>
                </>
              )}
            </button>
          </form>

          {/* Sign In Link */}
          <div className="mt-6 text-center">
            <p className="text-neutral-400 text-sm">
              Already have an account?{' '}
              <Link
                href={ROUTES.LOGIN}
                className="text-accent-400 hover:text-accent-300 font-semibold transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
