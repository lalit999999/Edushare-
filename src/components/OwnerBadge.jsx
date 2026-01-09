import { Shield, Crown } from 'lucide-react';
import React from 'react';


export default function OwnerBadge({ variant = 'default' }) {
  if (variant === 'compact') {
    return (
      <span className="inline-flex items-center space-x-1 px-2 py-1 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-full text-xs font-medium">
        <Crown className="w-3 h-3" />
        <span>Owner</span>
      </span>
    );
  }

  return (
    <div className="inline-flex items-center space-x-2 px-3 py-2 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-lg shadow-lg">
      <Shield className="w-5 h-5" />
      <div>
        <div className="font-semibold text-sm">Platform Owner</div>
        <div className="text-xs opacity-90">Administrator</div>
      </div>
    </div>
  );
}
