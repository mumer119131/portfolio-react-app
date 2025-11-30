'use client';

import React from 'react';

const LoadingState: React.FC = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="skeleton-loader max-w-sm w-full mx-auto mb-6 p-4">
          <div className="skeleton skeleton-image"></div>
          <div className="skeleton skeleton-text skeleton-title"></div>
          <div className="skeleton skeleton-text skeleton-details"></div>
          <div className="skeleton-buttons">
            <div className="skeleton skeleton-button"></div>
            <div className="skeleton skeleton-button"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LoadingState;
