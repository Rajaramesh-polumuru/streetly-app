import Link from 'next/link';

import { ROUTES } from '@/config/constants';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-6xl font-bold tracking-tight text-gray-900 mb-6">
          MERN Monorepo
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          Production-ready, scalable MERN stack monorepo with TypeScript, Turborepo, and
          best practices.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href={ROUTES.LOGIN}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
          <Link
            href={ROUTES.DASHBOARD}
            className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Dashboard
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold text-lg mb-2">⚡ Fast Setup</h3>
            <p className="text-gray-600 text-sm">
              Single command to get started with full development environment
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold text-lg mb-2">🎯 Type-Safe</h3>
            <p className="text-gray-600 text-sm">
              End-to-end type safety with TypeScript and shared schemas
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold text-lg mb-2">🚀 Production Ready</h3>
            <p className="text-gray-600 text-sm">
              Docker, CI/CD, testing, and monitoring configured out of the box
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

