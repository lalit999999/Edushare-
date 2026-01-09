import React from 'react';

import { Link } from "react-router-dom";
import { Download, Star, FileText, TrendingUp } from "lucide-react";
import ContributorAvatar from "./ContributorAvatar";
import QualityBadges from "./QualityBadges";

// Interface and Resource type imports removed because they are TypeScript-specific

export default function ResourceCard({ resource }) {
  // Only show approved resources in public listing
  if (resource.status !== "Approved") return null;

  return (
    <Link
      to={`/resources/${resource.id}`}
      className="block bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-200 group"
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span
                className={`px-2 py-1 rounded text-xs font-medium ${
                  resource.type === "Notes"
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                    : resource.type === "PYQ"
                    ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                    : resource.type === "Project"
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : resource.type === "Assignment"
                    ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                    : "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400"
                }`}
              >
                {resource.type}
              </span>
              {resource.isTrending && (
                <span className="flex items-center space-x-1 px-2 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded text-xs font-medium">
                  <TrendingUp className="w-3 h-3" />
                  <span>Trending</span>
                </span>
              )}
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
              {resource.title}
            </h3>
          </div>
          <FileText className="w-10 h-10 text-gray-400 dark:text-gray-500 shrink-0 ml-3" />
        </div>

        {/* Quality Badges */}
        {resource.qualityBadges && resource.qualityBadges.length > 0 && (
          <div className="mb-3">
            <QualityBadges badges={resource.qualityBadges} />
          </div>
        )}

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {resource.description}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
            {resource.subject}
          </span>
          <span className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
            Sem {resource.semester}
          </span>
          <span className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
            {resource.fileSize}
          </span>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
              <Download className="w-4 h-4" />
              <span>{resource.downloads?.toLocaleString() || 0}</span>
            </div>
            <div className="flex items-center space-x-1 text-sm text-yellow-600 dark:text-yellow-500">
              <Star className="w-4 h-4 fill-current" />
              <span>{resource.rating}</span>
            </div>
          </div>
          <div onClick={(e) => e.preventDefault()}>
            <ContributorAvatar
              contributor={resource.uploadedBy}
              size="sm"
              showTooltip={true}
              clickable={true}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}