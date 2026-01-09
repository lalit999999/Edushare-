import React from 'react';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Download, Share2, Bookmark, Star, Calendar, User, FileText, ArrowLeft, MessageSquare, ThumbsUp } from 'lucide-react';
import { mockResources, mockComments } from '../data/mockData';
import { useAuth } from '../contexts/AuthContext';
import ContributorAvatar from '../components/ContributorAvatar';
import QualityBadges from '../components/QualityBadges';
import AISummary from '../components/AISummary';

export default function ResourceDetailPage() {
  const { id } = useParams();
  const { isAuthenticated } = useAuth();
  const [isSaved, setIsSaved] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [comment, setComment] = useState('');
  const [activeTab, setActiveTab] = useState('preview');

  const resource = mockResources.find(r => r.id === id);
  const comments = mockComments[id || ''] || [];

  if (!resource) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Resource Not Found
          </h2>
          <Link to="/resources" className="text-blue-600 dark:text-blue-400 hover:underline">
            Back to Resources
          </Link>
        </div>
      </div>
    );
  }

  const handleDownload = () => {
    // Mock download
    alert('Download started! (This is a demo)');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: resource.title,
        text: resource.description,
        url: window.location.href
      });
    } else {
      setShowShareMenu(!showShareMenu);
    }
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!comment.trim() || userRating === 0) return;
    
    alert('Comment submitted! (This is a demo)');
    setComment('');
    setUserRating(0);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          to="/resources"
          className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Resources</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Resource Info */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      resource.type === 'Notes' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                      resource.type === 'PYQ' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' :
                      resource.type === 'Project' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                      resource.type === 'Assignment' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' :
                      'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400'
                    }`}>
                      {resource.type}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Semester {resource.semester}
                    </span>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {resource.title}
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400">
                    {resource.description}
                  </p>
                </div>
              </div>

              {/* Quality Badges */}
              {resource.qualityBadges && resource.qualityBadges.length > 0 && (
                <div className="mb-6">
                  <QualityBadges badges={resource.qualityBadges} />
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {resource.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Downloads</div>
                  <div className="text-xl font-semibold text-gray-900 dark:text-white">
                    {resource.downloads.toLocaleString()}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Rating</div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="text-xl font-semibold text-gray-900 dark:text-white">
                      {resource.rating}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Reviews</div>
                  <div className="text-xl font-semibold text-gray-900 dark:text-white">
                    {resource.reviews}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">File Size</div>
                  <div className="text-xl font-semibold text-gray-900 dark:text-white">
                    {resource.fileSize}
                  </div>
                </div>
              </div>

              {/* Uploader Info */}
              <div className="flex items-center space-x-3">
                <ContributorAvatar
                  contributor={resource.uploadedBy}
                  size="lg"
                  showTooltip={true}
                />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {resource.uploadedBy.name}
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>Uploaded on {new Date(resource.uploadedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Summary - Only for approved resources */}
            {resource.status === 'Approved' && resource.aiSummary && (
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                <AISummary summary={resource.aiSummary} />
              </div>
            )}

            {/* Tabs */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="flex border-b border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`flex-1 px-6 py-3 font-medium transition-colors ${
                    activeTab === 'preview'
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  Preview
                </button>
                <button
                  onClick={() => setActiveTab('comments')}
                  className={`flex-1 px-6 py-3 font-medium transition-colors ${
                    activeTab === 'comments'
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  Comments ({comments.length})
                </button>
              </div>

              <div className="p-6">
                {activeTab === 'preview' ? (
                  <div className="aspect-4/3 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 dark:text-gray-400">
                        PDF Preview ({resource.fileType})
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                        Download to view full document
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Add Comment */}
                    {isAuthenticated && (
                      <form onSubmit={handleSubmitComment} className="pb-6 border-b border-gray-200 dark:border-gray-700">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                          Add Your Review
                        </h3>
                        <div className="mb-3">
                          <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
                            Your Rating
                          </label>
                          <div className="flex space-x-1">
                            {[1, 2, 3, 4, 5].map(rating => (
                              <button
                                key={rating}
                                type="button"
                                onClick={() => setUserRating(rating)}
                                className="focus:outline-none"
                              >
                                <Star
                                  className={`w-6 h-6 ${
                                    rating <= userRating
                                      ? 'text-yellow-500 fill-current'
                                      : 'text-gray-300 dark:text-gray-600'
                                  }`}
                                />
                              </button>
                            ))}
                          </div>
                        </div>
                        <textarea
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          placeholder="Share your thoughts about this resource..."
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
                          rows={4}
                        />
                        <button
                          type="submit"
                          disabled={!comment.trim() || userRating === 0}
                          className="mt-3 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          Submit Review
                        </button>
                      </form>
                    )}

                    {/* Comments List */}
                    <div className="space-y-4">
                      {comments.length === 0 ? (
                        <div className="text-center py-8">
                          <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                          <p className="text-gray-600 dark:text-gray-400">
                            No reviews yet. Be the first to review!
                          </p>
                        </div>
                      ) : (
                        comments.map(comment => (
                          <div
                            key={comment.id}
                            className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                                  {comment.userAvatar}
                                </div>
                                <div>
                                  <div className="font-medium text-gray-900 dark:text-white">
                                    {comment.userName}
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <div className="flex">
                                      {[...Array(comment.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                                      ))}
                                    </div>
                                    <span className="text-xs text-gray-600 dark:text-gray-400">
                                      {new Date(comment.date).toLocaleDateString()}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                              {comment.content}
                            </p>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 sticky top-24">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Actions
              </h3>
              <div className="space-y-3">
                <button
                  onClick={handleDownload}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Resource</span>
                </button>
                <button
                  onClick={handleSave}
                  className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-colors ${
                    isSaved
                      ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                      : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
                  <span>{isSaved ? 'Saved' : 'Save for Later'}</span>
                </button>
                <div className="relative">
                  <button
                    onClick={handleShare}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                </div>
              </div>

              {/* Resource Details */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Subject</span>
                  <span className="font-medium text-gray-900 dark:text-white">{resource.subject}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Department</span>
                  <span className="font-medium text-gray-900 dark:text-white">{resource.department}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">College</span>
                  <span className="font-medium text-gray-900 dark:text-white">{resource.college}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">File Type</span>
                  <span className="font-medium text-gray-900 dark:text-white">{resource.fileType}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}