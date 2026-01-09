import React from 'react';
import { useState } from "react";
import { Upload, Download, Clock, Bookmark, Edit2, Save } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import ResourceCard from "../components/ResourceCard";
import OwnerBadge from "../components/OwnerBadge";
import { mockResources } from "../data/mockData";

const type = "uploads" | "saved" | "activity";

export default function ProfilePage() {
  const { user, updateProfile, isOwner } = useAuth();
  const [activeTab, setActiveTab] = useState("uploads");
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({
    name: user?.name || "",
    college: user?.college || "",
    department: user?.department || "",
    semester: user?.semester || 1,
  });

  if (!user) return null;

  // Mock data - in real app, this would be filtered by user
  const userUploads = mockResources.slice(0, 3);
  const savedResources = mockResources.slice(3, 6);
  const recentActivity = [
    {
      id: "1",
      action: "Uploaded",
      resource: "Data Structures Complete Notes",
      date: "2025-01-05",
    },
    {
      id: "2",
      action: "Downloaded",
      resource: "DBMS PYQ 2024",
      date: "2025-01-04",
    },
    {
      id: "3",
      action: "Saved",
      resource: "Machine Learning Project",
      date: "2025-01-03",
    },
    {
      id: "4",
      action: "Downloaded",
      resource: "Operating Systems Notes",
      date: "2025-01-02",
    },
  ];

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateProfile(editedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile({
      name: user.name,
      college: user.college,
      department: user.department,
      semester: user.semester,
    });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Profile Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div className="flex items-start space-x-4 mb-6 md:mb-0">
              <div className="w-20 h-20 bg-linear-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="flex-1">
                {isEditing ? (
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={editedProfile.name}
                      onChange={(e) =>
                        setEditedProfile({
                          ...editedProfile,
                          name: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                    />
                    <input
                      type="text"
                      value={editedProfile.college}
                      onChange={(e) =>
                        setEditedProfile({
                          ...editedProfile,
                          college: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                    />
                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={editedProfile.department}
                        onChange={(e) =>
                          setEditedProfile({
                            ...editedProfile,
                            department: e.target.value,
                          })
                        }
                        className="flex-1 px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                      />
                      <select
                        value={editedProfile.semester}
                        onChange={(e) =>
                          setEditedProfile({
                            ...editedProfile,
                            semester: parseInt(e.target.value),
                          })
                        }
                        className="px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                          <option key={sem} value={sem}>
                            Sem {sem}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                ) : (
                  <>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                      {user.name}
                    </h1>
                    {isOwner && (
                      <div className="mb-2">
                        <OwnerBadge variant="compact" />
                      </div>
                    )}
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      {user.college}
                    </p>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span>{user.department}</span>
                      <span>•</span>
                      <span>Semester {user.semester}</span>
                      <span>•</span>
                      <span>
                        Joined {new Date(user.joinedDate).toLocaleDateString()}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {isEditing ? (
              <div className="flex space-x-2">
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  <span>Save</span>
                </button>
              </div>
            ) : (
              <button
                onClick={handleEdit}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <Edit2 className="w-4 h-4" />
                <span>Edit Profile</span>
              </button>
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {user.uploads}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Uploads
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {user.downloads}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Downloads
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                12
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Saved
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                4.8
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Avg Rating
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab("uploads")}
              className={`flex-1 flex items-center justify-center space-x-2 px-6 py-4 font-medium transition-colors ${
                activeTab === "uploads"
                  ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
            >
              <Upload className="w-5 h-5" />
              <span>My Uploads</span>
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`flex-1 flex items-center justify-center space-x-2 px-6 py-4 font-medium transition-colors ${
                activeTab === "saved"
                  ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
            >
              <Bookmark className="w-5 h-5" />
              <span>Saved Resources</span>
            </button>
            <button
              onClick={() => setActiveTab("activity")}
              className={`flex-1 flex items-center justify-center space-x-2 px-6 py-4 font-medium transition-colors ${
                activeTab === "activity"
                  ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
            >
              <Clock className="w-5 h-5" />
              <span>Activity History</span>
            </button>
          </div>

          <div className="p-6">
            {activeTab === "uploads" && (
              <div>
                {userUploads.length === 0 ? (
                  <div className="text-center py-12">
                    <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      No uploads yet
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Start sharing your knowledge with the community
                    </p>
                    <a
                      href="/upload"
                      className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Upload Resource
                    </a>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {userUploads.map((resource) => (
                      <ResourceCard key={resource.id} resource={resource} />
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === "saved" && (
              <div>
                {savedResources.length === 0 ? (
                  <div className="text-center py-12">
                    <Bookmark className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      No saved resources
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Save resources to access them later
                    </p>
                    <a
                      href="/resources"
                      className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Browse Resources
                    </a>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {savedResources.map((resource) => (
                      <ResourceCard key={resource.id} resource={resource} />
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === "activity" && (
              <div className="space-y-3">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-2 rounded-lg ${
                          activity.action === "Uploaded"
                            ? "bg-green-100 dark:bg-green-900/30"
                            : activity.action === "Downloaded"
                            ? "bg-blue-100 dark:bg-blue-900/30"
                            : "bg-yellow-100 dark:bg-yellow-900/30"
                        }`}
                      >
                        {activity.action === "Uploaded" && (
                          <Upload className="w-5 h-5 text-green-600 dark:text-green-400" />
                        )}
                        {activity.action === "Downloaded" && (
                          <Download className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        )}
                        {activity.action === "Saved" && (
                          <Bookmark className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {activity.action}{" "}
                          <span className="text-gray-600 dark:text-gray-400">
                            {activity.resource}
                          </span>
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {new Date(activity.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
