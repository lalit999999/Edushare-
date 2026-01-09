import React from 'react';
import { useState } from "react";
import {
  Shield,
  CheckCircle,
  XCircle,
  Clock,
  FileText,
  Eye,
} from "lucide-react";
import { mockResources } from "../data/mockData";

export default function AdminDashboardPage() {
  const [resources, setResources] = useState(mockResources);
  const [selectedResource, setSelectedResource] = useState(null);
  const [rejectionReason, setRejectionReason] = useState("");
  const [showModal, setShowModal] = useState(false);
  // Fix for handleReject
  const pendingResources = resources.filter((r) => r.status === "Pending");
  const approvedCount = resources.filter((r) => r.status === "Approved").length;
  const rejectedCount = resources.filter((r) => r.status === "Rejected").length;

  const handleApprove = (id) => {
    setResources((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "Approved" } : r))
    );
    setShowModal(false);
    setSelectedResource(null);
  };

  const handleReject = (id) => {
    if (!rejectionReason.trim()) {
      alert("Please provide a rejection reason");
      return;
    }
    setResources((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, status: "Rejected", rejectionReason } : r
      )
    );
    setShowModal(false);
    setSelectedResource(null);
    setRejectionReason("");
  };

  const openModal = (resource) => {
    setSelectedResource(resource);
    setShowModal(true);
  };
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Admin Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Review and moderate uploaded resources
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Total Resources
              </div>
              <FileText className="w-5 h-5 text-gray-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              {resources.length}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg border border-yellow-500 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Pending Review
              </div>
              <Clock className="w-5 h-5 text-yellow-500" />
            </div>
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
              {pendingResources.length}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg border border-green-500 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Approved
              </div>
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
              {approvedCount}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg border border-red-500 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Rejected
              </div>
              <XCircle className="w-5 h-5 text-red-500" />
            </div>
            <div className="text-3xl font-bold text-red-600 dark:text-red-400">
              {rejectedCount}
            </div>
          </div>
        </div>

        {/* Pending Resources */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Pending Approval ({pendingResources.length})
          </h2>

          {pendingResources.length === 0 ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                All Caught Up!
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                No pending resources to review at the moment.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {pendingResources.map((resource) => (
                <div
                  key={resource.id}
                  className="border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded text-xs font-medium">
                          {resource.type}
                        </span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                          Sem {resource.semester}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {resource.description}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                        <span>{resource.subject}</span>
                        <span>•</span>
                        <span>{resource.college}</span>
                        <span>•</span>
                        <span>By {resource.uploadedBy.name}</span>
                        <span>•</span>
                        <span>{resource.fileSize}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => openModal(resource)}
                      className="ml-4 p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                      title="Review"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Review Modal */}
        {showModal && selectedResource && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Review Resource
                </h2>
              </div>

              <div className="p-6 space-y-4">
                {/* Resource Details */}
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Resource Information
                  </h3>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Title:
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {selectedResource.title}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Type:
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {selectedResource.type}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Subject:
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {selectedResource.subject}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Semester:
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {selectedResource.semester}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        File Size:
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {selectedResource.fileSize}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Uploaded By:
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {selectedResource.uploadedBy.name}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Description
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {selectedResource.description}
                  </p>
                </div>

                {/* Preview */}
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    File Preview
                  </h3>
                  <div className="aspect-4/3 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <FileText className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {selectedResource.fileType} Preview
                      </p>
                    </div>
                  </div>
                </div>

                {/* Rejection Reason Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Rejection Reason (if rejecting)
                  </label>
                  <textarea
                    value={rejectionReason}
                    onChange={(e) => setRejectionReason(e.target.value)}
                    placeholder="Provide a clear reason for rejection..."
                    rows={3}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex items-center justify-end space-x-3">
                <button
                  onClick={() => {
                    setShowModal(false);
                    setSelectedResource(null);
                    setRejectionReason("");
                  }}
                  className="px-6 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleReject(selectedResource.id)}
                  className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
                >
                  <XCircle className="w-5 h-5" />
                  <span>Reject</span>
                </button>
                <button
                  onClick={() => handleApprove(selectedResource.id)}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Approve</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
