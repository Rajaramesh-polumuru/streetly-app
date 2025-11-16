'use client';

import { useLogout } from '@/hooks/use-auth';
import { useAuthStore } from '@/stores/auth-store';

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logoutMutation = useLogout();

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                disabled={logoutMutation.isPending}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors disabled:opacity-50"
              >
                {logoutMutation.isPending ? 'Logging out...' : 'Logout'}
              </button>
            )}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Welcome to your Dashboard</h2>
          
          {isAuthenticated && user ? (
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-semibold">Name:</span> {user.name}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Email:</span> {user.email}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Role:</span> {user.role || 'user'}
              </p>
            </div>
          ) : (
            <p className="text-gray-600">
              Please log in to see your profile information.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}

