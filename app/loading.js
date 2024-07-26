import React from 'react';

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full border-t-transparent border-green-700"></div>
    </div>
  );
}
