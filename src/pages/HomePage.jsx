import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, FileText, Upload, Users, TrendingUp, Award, Star, ArrowRight } from 'lucide-react';
import ResourceCard from '../components/ResourceCard';
import { mockResources, topContributors, testimonials } from '../data/mockData.js';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const trendingResources = mockResources.filter(r => r.isTrending).slice(0, 3);
  
  const categories = [
    { id: 'notes', name: 'Notes', icon: FileText, count: 2456, color: 'blue' },
    { id: 'pyq', name: 'PYQs', icon: Award, count: 1234, color: 'purple' },
    { id: 'projects', name: 'Projects', icon: Upload, count: 892, color: 'green' },
    { id: 'assignments', name: 'Assignments', icon: FileText, count: 567, color: 'orange' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    window.location.href = `/resources?q=${searchQuery}`;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Share Knowledge,<br />Excel Together
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Your one-stop platform for academic resources, notes, PYQs, and projects
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-3xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-3 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg">
                <div className="flex-1 flex items-center space-x-3 px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Search className="w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for notes, PYQs, projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-gray-900 dark:text-white placeholder-gray-500"
                  />
                </div>
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg border-none outline-none cursor-pointer"
                >
                  <option value="all">All Categories</option>
                  <option value="notes">Notes</option>
                  <option value="pyq">PYQs</option>
                  <option value="projects">Projects</option>
                  <option value="assignments">Assignments</option>
                </select>
                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">15K+</div>
                <div className="text-blue-100 text-sm">Resources</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">8K+</div>
                <div className="text-blue-100 text-sm">Students</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">250+</div>
                <div className="text-blue-100 text-sm">Colleges</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-blue-100 text-sm">Contributors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Find the resources you need for your subjects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.id}
                  to={`/resources?type=${category.id}`}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-500 transition-all group"
                >
                  <div className={`w-12 h-12 bg-${category.color}-100 dark:bg-${category.color}-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 text-${category.color}-600 dark:text-${category.color}-400`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {category.count.toLocaleString()} resources
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trending Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                <TrendingUp className="w-8 h-8 mr-3 text-red-600" />
                Trending Resources
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Most popular resources this week
              </p>
            </div>
            <Link
              to="/resources"
              className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              <span>View All</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingResources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Contributors */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
              <Users className="w-8 h-8 mr-3 text-blue-600" />
              Top Contributors
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Students making a difference by sharing knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {topContributors.map((contributor, index) => (
              <div
                key={contributor.id}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-all"
              >
                <div className="relative inline-block mb-4">
                  <div className="w-20 h-20 bg-linear-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {contributor.avatar}
                  </div>
                  {index === 0 && (
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-yellow-900" />
                    </div>
                  )}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {contributor.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {contributor.college}
                </p>
                <div className="text-blue-600 dark:text-blue-400 font-semibold">
                  {contributor.uploads} uploads
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What Students Say
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Hear from our community members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.college}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start sharing and accessing quality academic resources today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Free
            </Link>
            <Link
              to="/resources"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Browse Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}