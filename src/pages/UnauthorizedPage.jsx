import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Home, ArrowLeft } from 'lucide-react';

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <ShieldAlert className="w-24 h-24 text-red-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Access Denied
          </h1>
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Admin Access Required
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            You do not have permission to access this page. This area is restricted to the platform owner only.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
          <p className="text-sm text-blue-800 dark:text-blue-300">
            <strong>Note:</strong> This platform is managed and moderated by the website owner. Admin privileges are controlled at the deployment level and cannot be granted to regular users.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
