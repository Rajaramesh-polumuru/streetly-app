'use client';

import type { LoginDto } from '@repo/types';
import {
  Button,
  Input,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Alert,
  AlertDescription,
  Separator,
} from '@repo/ui';
import { QrCode, Mail, Lock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { ROUTES, APP_NAME } from '@/config/constants';
import { useLogin } from '@/hooks/use-auth';

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDto>();
  const loginMutation = useLogin();

  const onSubmit = (data: LoginDto) => {
    loginMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-neutral-300 flex flex-col">
      {/* Header */}
      <div className="border-b border-neutral-400 bg-white py-4">
        <div className="container mx-auto px-4">
          <Link
            href={ROUTES.HOME}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500">
              <QrCode className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold text-primary-900">{APP_NAME}</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card variant="elevated" padding="lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Welcome Back</CardTitle>
              <CardDescription>Sign in to your restaurant dashboard</CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Email Input */}
                <Input
                  id="email"
                  type="email"
                  label="Email Address"
                  placeholder="you@restaurant.com"
                  leftIcon={<Mail className="h-4 w-4" />}
                  error={errors.email?.message}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />

                {/* Password Input */}
                <Input
                  id="password"
                  type="password"
                  label="Password"
                  placeholder="Enter your password"
                  leftIcon={<Lock className="h-4 w-4" />}
                  error={errors.password?.message}
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters',
                    },
                  })}
                />

                {/* Forgot Password */}
                <div className="flex justify-end">
                  <Link
                    href="#"
                    className="text-sm font-medium text-accent-600 hover:text-accent-700 transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Error Alert */}
                {loginMutation.isError && (
                  <Alert variant="error">
                    <AlertDescription>
                      {loginMutation.error?.message ||
                        'Invalid email or password. Please try again.'}
                    </AlertDescription>
                  </Alert>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  fullWidth
                  isLoading={loginMutation.isPending}
                  loadingText="Signing in..."
                >
                  Sign In
                </Button>
              </form>

              {/* Divider */}
              <div className="relative my-6">
                <Separator />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-neutral-600">
                  or
                </span>
              </div>

              {/* Sign Up Link */}
              <div className="text-center">
                <p className="text-sm text-primary-700">
                  Don&apos;t have an account?{' '}
                  <Link
                    href={ROUTES.REGISTER}
                    className="font-semibold text-accent-600 hover:text-accent-700 transition-colors"
                  >
                    Start your free trial
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Back to Home */}
          <div className="mt-6 text-center">
            <Link
              href={ROUTES.HOME}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 hover:text-accent-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
