import { ArrowRight, CheckCircle2, Code2, Database, Rocket, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

import { ROUTES } from '@/config/constants';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-900/80 backdrop-blur-lg border-b border-primary-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Streetly</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href={ROUTES.LOGIN}
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
              >
                Sign In
              </Link>
              <Link
                href={ROUTES.REGISTER}
                className="px-4 py-2 bg-accent-500 text-white text-sm font-medium rounded-lg hover:bg-accent-600 transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/30"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full text-accent-400 text-sm font-medium mb-8 animate-slide-up">
              <Zap className="w-4 h-4 mr-2" />
              Production-Ready MERN Stack
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
              Build{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
                Modern Apps
              </span>
              <br />
              Lightning Fast
            </h1>

            <p className="text-xl text-neutral-300 mb-10 max-w-3xl mx-auto animate-slide-up">
              A production-ready, scalable MERN monorepo with TypeScript, Turborepo, Next.js 14,
              Express, MongoDB, and industry best practices built-in.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
              <Link
                href={ROUTES.REGISTER}
                className="group px-8 py-4 bg-accent-500 text-white text-lg font-semibold rounded-xl hover:bg-accent-600 transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/30 flex items-center space-x-2"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={ROUTES.DASHBOARD}
                className="px-8 py-4 bg-primary-700/50 backdrop-blur-sm text-white text-lg font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 border border-primary-600/50 flex items-center space-x-2"
              >
                <span>View Demo</span>
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-primary-800/50 backdrop-blur-sm rounded-2xl border border-primary-700/50 hover:border-accent-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/10 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-accent-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-500/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-white mb-4">Powered by Modern Tech</h2>
            <p className="text-neutral-400 mb-10">Industry-leading tools and frameworks</p>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-primary-800/50 backdrop-blur-sm rounded-lg border border-primary-700/50 text-neutral-300 font-medium hover:border-accent-500/50 transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center p-12 bg-gradient-to-r from-accent-500/10 to-accent-600/10 rounded-3xl border border-accent-500/20 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-neutral-300 mb-8 text-lg">
              Join thousands of developers building with Streetly
            </p>
            <Link
              href={ROUTES.REGISTER}
              className="inline-flex items-center px-8 py-4 bg-accent-500 text-white text-lg font-semibold rounded-xl hover:bg-accent-600 transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/30"
            >
              Start Building Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-primary-700/50 bg-primary-900/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-accent-500 rounded-lg flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-semibold">Streetly</span>
            </div>
            <p className="text-neutral-400 text-sm">
              © 2024 Streetly. Built with ❤️ using MERN Stack.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: Rocket,
    title: 'Blazing Fast',
    description:
      'Optimized build times and runtime performance with Turborepo and Next.js 14 App Router.',
  },
  {
    icon: Shield,
    title: 'Type-Safe',
    description:
      'End-to-end type safety with TypeScript, Zod validation, and shared types across the monorepo.',
  },
  {
    icon: Database,
    title: 'Scalable Backend',
    description:
      'Express 4.x with clean architecture, MongoDB, JWT auth, and OpenAPI documentation.',
  },
  {
    icon: CheckCircle2,
    title: 'Best Practices',
    description:
      'ESLint, Prettier, Husky hooks, conventional commits, and comprehensive testing setup.',
  },
  {
    icon: Code2,
    title: 'Modern UI',
    description: 'Beautiful components with TailwindCSS, shadcn/ui, Zustand, and TanStack Query.',
  },
  {
    icon: Zap,
    title: 'DevOps Ready',
    description: 'Docker, Docker Compose, GitHub Actions CI/CD, and production deployment guides.',
  },
];

const techStack = [
  'Next.js 14',
  'Express 4.x',
  'MongoDB',
  'TypeScript',
  'Turborepo',
  'TailwindCSS',
  'Zustand',
  'TanStack Query',
  'Docker',
  'Jest',
];
