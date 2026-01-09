import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, FileQuestion } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <FileQuestion className="w-24 h-24 text-gray-400 mx-auto mb-6" />
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
          <Link
            to="/resources"
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <Search className="w-5 h-5" />
            <span>Browse Resources</span>
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Here are some helpful links:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/colleges"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
            >
              Colleges
            </Link>
            <Link
              to="/help"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
            >
              Help & Support
            </Link>
            <Link
              to="/contact"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
