import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Badge,
  Container,
} from '@repo/ui';
import {
  QrCode,
  ClipboardList,
  CreditCard,
  BarChart3,
  Heart,
  Package,
  Check,
  ArrowRight,
  Smartphone,
  TrendingUp,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

import { APP_NAME, APP_TAGLINE, ROUTES, FEATURES, PRICING } from '@/config/constants';

export default function Home() {
  return (
    <div className="min-h-screen bg-primary-600">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-primary-700 bg-primary-600/90 backdrop-blur-lg">
        <Container maxWidth="xl" padding="md">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500">
                <QrCode className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">{APP_NAME}</span>
            </div>

            <div className="hidden items-center gap-8 md:flex">
              <a
                href="#features"
                className="text-sm font-medium text-neutral-300 hover:text-accent-500 transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-medium text-neutral-300 hover:text-accent-500 transition-colors"
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium text-neutral-300 hover:text-accent-500 transition-colors"
              >
                Pricing
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Link href={ROUTES.LOGIN}>
                <Button
                  size="md"
                  className="bg-transparent text-white hover:text-accent-400 hover:bg-secondary-500/50 transition-all duration-300 font-medium"
                >
                  Sign In
                </Button>
              </Link>
              <Link href={ROUTES.REGISTER}>
                <Button
                  variant="accent"
                  size="md"
                  className="bg-accent-500 hover:bg-accent-600 shadow-lg shadow-accent-500/30 font-semibold"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-700">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-600 rounded-full blur-3xl" />
        </div>

        <Container maxWidth="xl" className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <Badge
                variant="success"
                size="md"
                className="bg-accent-500/20 text-accent-300 border-accent-500/30"
              >
                <Zap className="mr-1 h-3 w-3" />
                Built for Modern Restaurants
              </Badge>

              <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                {APP_TAGLINE}
              </h1>

              <p className="text-xl text-neutral-200 max-w-2xl">
                Streamline orders, boost revenue, and delight customers with our all-in-one POS and
                digital menu platform. Built specifically for restaurants in India.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href={ROUTES.REGISTER}>
                  <Button
                    variant="accent"
                    size="lg"
                    rightIcon={<ArrowRight className="h-5 w-5" />}
                    className="bg-accent-500 hover:bg-accent-600 shadow-xl shadow-accent-500/30 font-semibold"
                  >
                    Start Free Trial
                  </Button>
                </Link>
                <Link href="#how-it-works">
                  <Button
                    size="lg"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 transition-all duration-300 font-semibold"
                  >
                    See How It Works
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-10 w-10 rounded-full border-2 border-primary-600 bg-accent-500"
                      />
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-white">50+ Restaurants</div>
                    <div className="text-neutral-300">Already Growing</div>
                  </div>
                </div>
                <div className="h-12 w-px bg-primary-500" />
                <div className="text-sm">
                  <div className="font-semibold text-white">15-20% AOV Increase</div>
                  <div className="text-neutral-300">Average Growth</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-accent-500/30 to-accent-600/30 blur-3xl" />
              <Card
                variant="elevated"
                padding="none"
                className="relative overflow-hidden bg-secondary-600 border-secondary-500"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-secondary-500 to-secondary-700 p-8">
                  <div className="flex h-full items-center justify-center">
                    <div className="rounded-lg bg-accent-500 p-12 shadow-2xl">
                      <QrCode className="h-32 w-32 text-white" />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-secondary-600">
        <Container maxWidth="xl">
          <div className="text-center mb-16">
            <Badge
              variant="info"
              size="md"
              className="mb-4 bg-accent-500/20 text-accent-300 border-accent-500/30"
            >
              Features
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              Everything You Need to Run Your Restaurant
            </h2>
            <p className="text-xl text-neutral-200 max-w-2xl mx-auto">
              From contactless ordering to business intelligence, we&apos;ve got you covered.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <QrCode className="h-8 w-8" />,
                title: FEATURES.QR_MENU.title,
                description: FEATURES.QR_MENU.description,
                color: 'accent',
              },
              {
                icon: <ClipboardList className="h-8 w-8" />,
                title: FEATURES.ORDER_MANAGEMENT.title,
                description: FEATURES.ORDER_MANAGEMENT.description,
                color: 'info',
              },
              {
                icon: <CreditCard className="h-8 w-8" />,
                title: FEATURES.PAYMENT_INTEGRATION.title,
                description: FEATURES.PAYMENT_INTEGRATION.description,
                color: 'warning',
              },
              {
                icon: <BarChart3 className="h-8 w-8" />,
                title: FEATURES.ANALYTICS.title,
                description: FEATURES.ANALYTICS.description,
                color: 'success',
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: FEATURES.LOYALTY.title,
                description: FEATURES.LOYALTY.description,
                color: 'error',
              },
              {
                icon: <Package className="h-8 w-8" />,
                title: FEATURES.INVENTORY.title,
                description: FEATURES.INVENTORY.description,
                color: 'secondary',
              },
            ].map((feature, index) => (
              <Card
                key={index}
                variant="default"
                className="group hover:shadow-xl transition-all duration-300 bg-primary-700 border-primary-600 hover:border-accent-500"
              >
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-accent-500/20 text-accent-400 group-hover:scale-110 group-hover:bg-accent-500/30 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                  <CardDescription className="text-neutral-300">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-32 bg-primary-600">
        <Container maxWidth="xl">
          <div className="text-center mb-16">
            <Badge
              variant="success"
              size="md"
              className="mb-4 bg-accent-500/20 text-accent-300 border-accent-500/30"
            >
              How It Works
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">Get Started in Minutes</h2>
            <p className="text-xl text-neutral-200 max-w-2xl mx-auto">
              Simple setup, powerful results. Launch your digital menu in just 3 steps.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: '01',
                icon: <Smartphone className="h-8 w-8" />,
                title: 'Sign Up & Customize',
                description:
                  'Create your account and add your restaurant details, logo, and menu items.',
              },
              {
                step: '02',
                icon: <QrCode className="h-8 w-8" />,
                title: 'Generate QR Codes',
                description:
                  'Instantly generate unique QR codes for each table in your restaurant.',
              },
              {
                step: '03',
                icon: <TrendingUp className="h-8 w-8" />,
                title: 'Start Accepting Orders',
                description:
                  'Customers scan, order, and pay - while you track everything in real-time.',
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                {index < 2 && (
                  <div className="absolute left-1/2 top-16 hidden h-px w-full bg-accent-500/30 md:block" />
                )}
                <Card
                  variant="outlined"
                  className="relative z-10 bg-secondary-700 border-secondary-600"
                >
                  <CardHeader className="text-center">
                    <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-500 text-white shadow-lg shadow-accent-500/30">
                      {step.icon}
                    </div>
                    <div className="absolute -top-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-600 text-white font-bold shadow-lg">
                      {step.step}
                    </div>
                    <CardTitle className="text-white">{step.title}</CardTitle>
                    <CardDescription className="text-neutral-300">
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href={ROUTES.REGISTER}>
              <Button
                variant="accent"
                size="lg"
                rightIcon={<ArrowRight className="h-5 w-5" />}
                className="bg-accent-500 hover:bg-accent-600 shadow-xl shadow-accent-500/30 font-semibold"
              >
                Start Your Free Trial
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32 bg-secondary-600">
        <Container maxWidth="xl">
          <div className="text-center mb-16">
            <Badge
              variant="warning"
              size="md"
              className="mb-4 bg-accent-500/20 text-accent-300 border-accent-500/30"
            >
              Pricing
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-neutral-200 max-w-2xl mx-auto">
              Choose the plan that fits your restaurant. No hidden fees.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {Object.values(PRICING).map((plan, index) => (
              <Card
                key={index}
                variant={plan.recommended ? 'elevated' : 'outlined'}
                className={
                  plan.recommended
                    ? 'border-2 border-accent-500 relative bg-primary-700 shadow-xl shadow-accent-500/20'
                    : 'bg-primary-700 border-primary-600'
                }
              >
                {plan.recommended && (
                  <Badge
                    variant="success"
                    className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-500 text-white border-accent-500"
                  >
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">₹{plan.price}</span>
                    <span className="text-neutral-300">/{plan.interval}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-neutral-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={ROUTES.REGISTER}>
                    <Button
                      size="lg"
                      fullWidth
                      className={
                        plan.recommended
                          ? 'bg-accent-500 hover:bg-accent-600 shadow-lg shadow-accent-500/30 text-white font-semibold'
                          : 'bg-transparent border-2 border-accent-500 text-accent-400 hover:bg-accent-500 hover:text-white transition-all duration-300 font-semibold'
                      }
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-neutral-300">
              All plans include 14-day free trial. No credit card required.
            </p>
          </div>
        </Container>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-primary-700">
        <Container maxWidth="xl">
          <div className="grid gap-8 md:grid-cols-3 text-center">
            <div>
              <div className="text-5xl font-bold text-accent-400 mb-2">15-20%</div>
              <div className="text-lg font-medium text-white">AOV Increase</div>
              <div className="text-sm text-neutral-300">Average order value growth</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent-400 mb-2">30%</div>
              <div className="text-lg font-medium text-white">Time Saved</div>
              <div className="text-sm text-neutral-300">On order processing</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent-400 mb-2">25%</div>
              <div className="text-lg font-medium text-white">Repeat Customers</div>
              <div className="text-sm text-neutral-300">With loyalty programs</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-secondary-600">
        <Container maxWidth="lg">
          <Card variant="elevated" className="overflow-hidden border-0">
            <div className="bg-gradient-to-r from-accent-600 to-accent-500 p-12 text-center text-white">
              <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Restaurant?</h2>
              <p className="text-xl mb-8 text-accent-50">
                Join 50+ restaurants already growing with Streetly. Start your 14-day free trial
                today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={ROUTES.REGISTER}>
                  <Button
                    variant="primary"
                    size="lg"
                    className="bg-white text-accent-600 hover:bg-neutral-100 shadow-lg font-semibold"
                    rightIcon={<ArrowRight className="h-5 w-5" />}
                  >
                    Start Free Trial
                  </Button>
                </Link>
                <Link href={ROUTES.LOGIN}>
                  <Button
                    size="lg"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-accent-600 transition-all duration-300 font-semibold"
                  >
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary-700 bg-primary-800 py-12">
        <Container maxWidth="xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500">
                  <QrCode className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold text-white">{APP_NAME}</span>
              </div>
              <p className="text-sm text-neutral-300">
                Modern POS and Digital Menu Platform for Restaurants
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>
                  <a href="#features" className="hover:text-accent-400 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-accent-400 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-accent-400 transition-colors">
                    How It Works
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>
                  <button type="button" className="hover:text-accent-400 transition-colors">
                    About
                  </button>
                </li>
                <li>
                  <button type="button" className="hover:text-accent-400 transition-colors">
                    Blog
                  </button>
                </li>
                <li>
                  <button type="button" className="hover:text-accent-400 transition-colors">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>
                  <button type="button" className="hover:text-accent-400 transition-colors">
                    Privacy
                  </button>
                </li>
                <li>
                  <button type="button" className="hover:text-accent-400 transition-colors">
                    Terms
                  </button>
                </li>
                <li>
                  <button type="button" className="hover:text-accent-400 transition-colors">
                    Security
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-primary-700 text-center text-sm text-neutral-400">
            <p>
              &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
