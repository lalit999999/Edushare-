import React from 'react';
import { useState } from 'react';
import { Search, MapPin, FileText, Users, Building2 } from 'lucide-react';
import { mockColleges } from '../data/mockData';

export default function CollegesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredColleges = mockColleges.filter(college =>
    college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    college.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Colleges & Universities
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Explore resources from various colleges across India
          </p>
        </div>

        {/* Search */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 mb-6">
          <div className="flex items-center space-x-3 px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search colleges by name or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-gray-900 dark:text-white placeholder-gray-500"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-linear-to-br from-blue-600 to-blue-800 text-white rounded-lg p-6">
            <Building2 className="w-12 h-12 mb-3 opacity-80" />
            <div className="text-3xl font-bold mb-1">{mockColleges.length}+</div>
            <div className="text-blue-100">Partner Colleges</div>
          </div>
          <div className="bg-linear-to-br from-green-600 to-green-800 text-white rounded-lg p-6">
            <FileText className="w-12 h-12 mb-3 opacity-80" />
            <div className="text-3xl font-bold mb-1">
              {mockColleges.reduce((sum, c) => sum + c.resourceCount, 0).toLocaleString()}+
            </div>
            <div className="text-green-100">Total Resources</div>
          </div>
          <div className="bg-linear-to-br from-purple-600 to-purple-800 text-white rounded-lg p-6">
            <Users className="w-12 h-12 mb-3 opacity-80" />
            <div className="text-3xl font-bold mb-1">
              {mockColleges.reduce((sum, c) => sum + c.studentCount, 0).toLocaleString()}+
            </div>
            <div className="text-purple-100">Active Students</div>
          </div>
        </div>

        {/* Colleges Grid */}
        {filteredColleges.length === 0 ? (
          <div className="text-center py-16">
            <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No colleges found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try searching with a different query
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredColleges.map((college) => (
              <div
                key={college.id}
                className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-500 transition-all group"
              >
                {/* College Logo/Icon */}
                <div className="w-16 h-16 bg-linear-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white text-2xl font-bold mb-4 group-hover:scale-110 transition-transform">
                  {college.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                </div>

                {/* College Info */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {college.name}
                </h3>
                
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{college.location}</span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-1">
                      <FileText className="w-4 h-4" />
                      <span className="text-xs">Resources</span>
                    </div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {college.resourceCount.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-1">
                      <Users className="w-4 h-4" />
                      <span className="text-xs">Students</span>
                    </div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {college.studentCount.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* View Resources Button */}
                <a
                  href={`/resources?college=${encodeURIComponent(college.name)}`}
                  className="mt-4 block w-full px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-center rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors font-medium"
                >
                  View Resources
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Add College CTA */}
        <div className="mt-12 bg-linear-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-gray-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Is Your College Missing?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Help us expand our network! Contact us to add your college to our platform and start sharing resources with your fellow students.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
