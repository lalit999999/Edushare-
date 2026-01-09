// Environment configuration
// This file reads deployment-level configuration

export const config = {
  // Owner email - Only this user has admin access
  // Change this value in .env file before deployment
  ownerEmail: import.meta.env?.VITE_OWNER_EMAIL || 'admin@edushare.com',
};

// Function to check if user is the platform owner
export const isOwnerUser = (userEmail) => {
  if (!userEmail) return false;
  return userEmail.toLowerCase() === config.ownerEmail.toLowerCase();
};
