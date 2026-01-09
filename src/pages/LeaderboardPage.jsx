import React from 'react';
import { Trophy, Medal, Award, TrendingUp, Download } from "lucide-react";
// import { Trophy, Medal, Award, TrendingUp, Download } from 'lucide-react';
import ContributorAvatar from "../components/ContributorAvatar";
import { topContributors } from "../data/mockData";

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-linear-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contributor Leaderboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Recognizing our top contributors who are making a difference by
            sharing quality academic resources
          </p>
        </div>

        {/* Top 3 Podium */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-3 gap-4 items-end">
            {/* 2nd Place */}
            <div className="text-center">
              <div className="bg-linear-to-br from-gray-300 to-gray-500 rounded-t-lg p-6 mb-4">
                <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-20 h-20 bg-linear-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                    {topContributors[1].avatar}
                  </div>
                </div>
                <Medal className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-white font-bold text-lg">2nd</div>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                {topContributors[1].name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {topContributors[1].college}
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm">
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {topContributors[1].uploads}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Uploads
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {topContributors[1].totalDownloads.toLocaleString()}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Downloads
                  </div>
                </div>
              </div>
            </div>

            {/* 1st Place */}
            <div className="text-center">
              <div className="bg-linear-to-br from-yellow-400 to-yellow-600 rounded-t-lg p-8 mb-4">
                <div className="w-28 h-28 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-24 h-24 bg-linear-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                    {topContributors[0].avatar}
                  </div>
                </div>
                <Trophy className="w-10 h-10 text-white mx-auto mb-2" />
                <div className="text-white font-bold text-2xl">1st</div>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">
                {topContributors[0].name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {topContributors[0].college}
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm">
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-lg">
                    {topContributors[0].uploads}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Uploads
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-lg">
                    {topContributors[0].totalDownloads.toLocaleString()}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Downloads
                  </div>
                </div>
              </div>
            </div>

            {/* 3rd Place */}
            <div className="text-center">
              <div className="bg-linear-to-br from-orange-400 to-orange-600 rounded-t-lg p-6 mb-4">
                <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-20 h-20 bg-linear-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                    {topContributors[2].avatar}
                  </div>
                </div>
                <Medal className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-white font-bold text-lg">3rd</div>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                {topContributors[2].name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {topContributors[2].college}
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm">
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {topContributors[2].uploads}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Uploads
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {topContributors[2].totalDownloads.toLocaleString()}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Downloads
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Leaderboard */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              All Contributors
            </h2>
          </div>

          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {topContributors.map((contributor, index) => (
              <div
                key={contributor.id}
                className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  {/* Rank */}
                  <div className="w-12 text-center">
                    {index < 3 ? (
                      <div className="inline-flex items-center justify-center">
                        {index === 0 && (
                          <Trophy className="w-6 h-6 text-yellow-500" />
                        )}
                        {index === 1 && (
                          <Medal className="w-6 h-6 text-gray-400" />
                        )}
                        {index === 2 && (
                          <Medal className="w-6 h-6 text-orange-600" />
                        )}
                      </div>
                    ) : (
                      <div className="text-2xl font-bold text-gray-400">
                        {index + 1}
                      </div>
                    )}
                  </div>

                  {/* Avatar */}
                  <ContributorAvatar
                    contributor={contributor}
                    size="lg"
                    showTooltip={false}
                    rank={contributor.rank}
                  />

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                      {contributor.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {contributor.college}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center space-x-8">
                    <div className="text-center">
                      <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 mb-1">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-xs">Uploads</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {contributor.uploads}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 mb-1">
                        <Download className="w-4 h-4" />
                        <span className="text-xs">Downloads</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {contributor.totalDownloads.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mt-12 bg-linear-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-gray-900 text-white rounded-lg p-8 text-center">
          <Award className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <h2 className="text-2xl font-bold mb-3">
            Want to See Your Name Here?
          </h2>
          <p className="text-blue-100 mb-6">
            Start contributing quality resources and climb the leaderboard!
          </p>
          <a
            href="/upload"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Upload Resource
          </a>
        </div>
      </div>
    </div>
  );
}
