import React from 'react';
import { Trophy, Medal } from 'lucide-react';

export default function ContributorAvatar({ 
  contributor, 
  size = 'md', 
  showTooltip = true, 
  rank,
  clickable = true 
}) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-16 h-16 text-xl'
  };

  const getRankIcon = () => {
    if (!rank) return null;
    if (rank === 1) return <Trophy className="w-4 h-4 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-4 h-4 text-gray-400" />;
    if (rank === 3) return <Medal className="w-4 h-4 text-orange-600" />;
    return null;
  };

  const avatarContent = (
    <div className={`${sizeClasses[size]} bg-linear-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-semibold ${clickable ? 'hover:scale-110 transition-transform cursor-pointer' : ''} relative`}>
      {contributor.avatar}
      {rank && rank <= 3 && (
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
          {getRankIcon()}
        </div>
      )}
    </div>
  );

  const handleClick = (e) => {
    if (clickable) {
      e.preventDefault();
      e.stopPropagation();
      window.location.href = `/profile/${contributor.id}`;
    }
  };

  return (
    <div className="relative group">
      {clickable ? (
        <div onClick={handleClick} className="block">
          {avatarContent}
        </div>
      ) : (
        avatarContent
      )}
      
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-10 pointer-events-none">
          <div className="bg-gray-900 text-white text-xs rounded-lg py-2 px-3 whitespace-nowrap shadow-lg">
            <div className="font-semibold">{contributor.name}</div>
            {contributor.college && (
              <div className="text-gray-300 text-xs">{contributor.college}</div>
            )}
            {contributor.uploads !== undefined && (
              <div className="text-gray-300 text-xs">{contributor.uploads} uploads</div>
            )}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      )}
    </div>
  );
}
