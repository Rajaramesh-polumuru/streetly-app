'use client';

import type { RegisterDto } from '@repo/types';
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
  Badge,
} from '@repo/ui';
import { QrCode, Mail, Lock, User, Building2, Phone, ArrowLeft, Check } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { ROUTES, APP_NAME } from '@/config/constants';
import { useRegister } from '@/hooks/use-auth';

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterDto>();
  const registerMutation = useRegister();

  const password = watch('password');

  const onSubmit = (data: RegisterDto) => {
    // Remove confirmPassword before sending to backend
    const { confirmPassword: _confirmPassword, ...registerData } = data;
    registerMutation.mutate(registerData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-600 flex flex-col">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative z-10 border-b border-primary-700 bg-primary-600/80 backdrop-blur-lg py-4">
        <div className="container mx-auto px-4">
          <Link
            href={ROUTES.HOME}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500 shadow-lg shadow-accent-500/30">
              <QrCode className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white">{APP_NAME}</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Benefits Sidebar */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Start Your Free Trial</h3>
                <p className="text-neutral-300">Join 50+ restaurants growing with Streetly</p>
              </div>

              <div className="space-y-4">
                {[
                  'No credit card required',
                  '14-day free trial',
                  'Cancel anytime',
                  'Full access to all features',
                  'Priority customer support',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-500/20 border border-accent-500/30">
                        <Check className="h-3 w-3 text-accent-400" />
                      </div>
                    </div>
                    <span className="text-sm text-neutral-300">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 p-4 rounded-xl bg-accent-500/10 border border-accent-500/20">
                <Badge
                  variant="success"
                  size="md"
                  className="bg-accent-500 text-white border-accent-400"
                >
                  <span className="font-semibold">15-20% AOV Increase</span>
                </Badge>
                <p className="text-sm text-neutral-300 mt-2">
                  Average revenue growth for our customers
                </p>
              </div>
            </div>

            {/* Registration Form */}
            <div className="md:col-span-3">
              <Card
                variant="elevated"
                padding="lg"
                className="bg-secondary-600/80 backdrop-blur-xl border-secondary-500 shadow-2xl"
              >
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl text-white">Create Your Account</CardTitle>
                  <CardDescription className="text-neutral-300">
                    Set up your restaurant in minutes
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Name Input */}
                    <Input
                      id="name"
                      type="text"
                      label="Full Name"
                      placeholder="John Doe"
                      leftIcon={<User className="h-4 w-4" />}
                      error={errors.name?.message}
                      className="bg-primary-700 border-primary-600 text-white placeholder:text-neutral-500"
                      {...register('name', {
                        required: 'Full name is required',
                        minLength: {
                          value: 2,
                          message: 'Name must be at least 2 characters',
                        },
                      })}
                    />

                    {/* Email Input */}
                    <Input
                      id="email"
                      type="email"
                      label="Email Address"
                      placeholder="you@restaurant.com"
                      leftIcon={<Mail className="h-4 w-4" />}
                      error={errors.email?.message}
                      helperText="We'll send your QR codes and reports here"
                      className="bg-primary-700 border-primary-600 text-white placeholder:text-neutral-500"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                    />

                    {/* Restaurant Name Input */}
                    <Input
                      id="restaurantName"
                      type="text"
                      label="Restaurant Name"
                      placeholder="Your Restaurant Name"
                      leftIcon={<Building2 className="h-4 w-4" />}
                      error={errors.restaurantName?.message}
                      className="bg-primary-700 border-primary-600 text-white placeholder:text-neutral-500"
                      {...register('restaurantName', {
                        required: 'Restaurant name is required',
                      })}
                    />

                    {/* Phone Number Input */}
                    <Input
                      id="phone"
                      type="tel"
                      label="Phone Number"
                      placeholder="+91 98765 43210"
                      leftIcon={<Phone className="h-4 w-4" />}
                      error={errors.phone?.message}
                      className="bg-primary-700 border-primary-600 text-white placeholder:text-neutral-500"
                      {...register('phone', {
                        required: 'Phone number is required',
                        pattern: {
                          value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                          message: 'Invalid phone number',
                        },
                      })}
                    />

                    {/* Password Input */}
                    <Input
                      id="password"
                      type="password"
                      label="Password"
                      placeholder="Create a strong password"
                      leftIcon={<Lock className="h-4 w-4" />}
                      error={errors.password?.message}
                      helperText="Must be at least 8 characters"
                      className="bg-primary-700 border-primary-600 text-white placeholder:text-neutral-500"
                      {...register('password', {
                        required: 'Password is required',
                        minLength: {
                          value: 8,
                          message: 'Password must be at least 8 characters',
                        },
                        pattern: {
                          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                          message: 'Password must contain uppercase, lowercase, and number',
                        },
                      })}
                    />

                    {/* Confirm Password Input */}
                    <Input
                      id="confirmPassword"
                      type="password"
                      label="Confirm Password"
                      placeholder="Re-enter your password"
                      leftIcon={<Lock className="h-4 w-4" />}
                      error={errors.confirmPassword?.message}
                      className="bg-primary-700 border-primary-600 text-white placeholder:text-neutral-500"
                      {...register('confirmPassword', {
                        required: 'Please confirm your password',
                        validate: (value) => value === password || 'Passwords do not match',
                      })}
                    />

                    {/* Terms and Conditions */}
                    <div className="text-xs text-neutral-300">
                      By creating an account, you agree to our{' '}
                      <Link
                        href="#"
                        className="text-accent-400 hover:text-accent-300 transition-colors"
                      >
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link
                        href="#"
                        className="text-accent-400 hover:text-accent-300 transition-colors"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </div>

                    {/* Error Alert */}
                    {registerMutation.isError && (
                      <Alert variant="error" className="bg-error-500/10 border-error-500/30">
                        <AlertDescription className="text-error-300">
                          {registerMutation.error?.message ||
                            'Registration failed. Please try again.'}
                        </AlertDescription>
                      </Alert>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      fullWidth
                      isLoading={registerMutation.isPending}
                      loadingText="Creating your account..."
                      className="bg-accent-500 hover:bg-accent-600 shadow-lg shadow-accent-500/30 text-white font-semibold"
                    >
                      Start Free Trial
                    </Button>
                  </form>

                  {/* Divider */}
                  <div className="relative my-6">
                    <Separator className="bg-primary-600" />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary-600 px-2 text-sm text-neutral-400">
                      or
                    </span>
                  </div>

                  {/* Sign In Link */}
                  <div className="text-center">
                    <p className="text-sm text-neutral-300">
                      Already have an account?{' '}
                      <Link
                        href={ROUTES.LOGIN}
                        className="font-semibold text-accent-400 hover:text-accent-300 transition-colors"
                      >
                        Sign in
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Back to Home */}
              <div className="mt-6 text-center">
                <Link
                  href={ROUTES.HOME}
                  className="inline-flex items-center gap-2 text-sm font-medium text-neutral-300 hover:text-accent-400 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
