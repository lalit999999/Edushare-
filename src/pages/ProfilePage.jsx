import React, { useState } from "react";
import { Upload, Download, Clock, Bookmark, Edit2, Save } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import ResourceCard from "../components/ResourceCard";
import OwnerBadge from "../components/OwnerBadge";
import { mockResources } from "../data/mockData";

export default function ProfilePage() {
  const { user, isOwner } = useAuth();

  const [activeTab, setActiveTab] = useState("uploads");
  const [isEditing, setIsEditing] = useState(false);

  if (!user) return null;

  // Safe derived values from Firebase user
  const displayName = user.displayName || "User";
  const email = user.email || "";

  const initials = (displayName || email)
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  // Mock data (until Firestore integration)
  const userUploads = mockResources.slice(0, 3);
  const savedResources = mockResources.slice(3, 6);

  const recentActivity = [
    { id: "1", action: "Uploaded", resource: "DSA Notes", date: "2025-01-05" },
    { id: "2", action: "Downloaded", resource: "DBMS PYQ", date: "2025-01-04" },
    { id: "3", action: "Saved", resource: "ML Project", date: "2025-01-03" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">

        {/* PROFILE HEADER */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border p-6 mb-6">
          <div className="flex flex-col md:flex-row md:justify-between">

            <div className="flex gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {initials}
              </div>

              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {displayName}
                </h1>

                {isOwner && <OwnerBadge variant="compact" />}

                <p className="text-gray-600 dark:text-gray-400">
                  {email}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg"
            >
              <Edit2 className="w-4 h-4" />
              Edit Profile
            </button>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t">
            <Stat label="Uploads" value={userUploads.length} />
            <Stat label="Downloads" value={24} />
            <Stat label="Saved" value={12} />
            <Stat label="Rating" value="4.8" />
          </div>
        </div>

        {/* TABS */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border overflow-hidden">
          <div className="flex border-b">
            <Tab label="uploads" icon={<Upload />} activeTab={activeTab} setActiveTab={setActiveTab} />
            <Tab label="saved" icon={<Bookmark />} activeTab={activeTab} setActiveTab={setActiveTab} />
            <Tab label="activity" icon={<Clock />} activeTab={setActiveTab} setActiveTab={setActiveTab} />
          </div>

          <div className="p-6">
            {activeTab === "uploads" && (
              <Grid resources={userUploads} emptyText="No uploads yet" />
            )}

            {activeTab === "saved" && (
              <Grid resources={savedResources} emptyText="No saved resources" />
            )}

            {activeTab === "activity" && (
              <div className="space-y-3">
                {recentActivity.map((a) => (
                  <div key={a.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="font-medium">
                      {a.action} <span className="text-gray-500">{a.resource}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                      {new Date(a.date).toLocaleDateString()}
                    </p>
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

/* ---------- SMALL UI HELPERS ---------- */

function Stat({ label, value }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
}

function Tab({ label, icon, activeTab, setActiveTab }) {
  return (
    <button
      onClick={() => setActiveTab(label)}
      className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 ${
        activeTab === label
          ? "border-b-2 border-blue-600 text-blue-600"
          : "text-gray-500"
      }`}
    >
      {icon}
      <span className="capitalize">{label}</span>
    </button>
  );
}

function Grid({ resources, emptyText }) {
  if (!resources.length) {
    return <p className="text-center text-gray-500">{emptyText}</p>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {resources.map((r) => (
        <ResourceCard key={r.id} resource={r} />
      ))}
    </div>
  );
}
