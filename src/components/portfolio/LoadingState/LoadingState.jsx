import React from 'react'

const LoadingState = () => {
    const items = [1, 2, 3, 4, 5, 6]
  return (
    <div className='flex flex-wrap gap-4 justify-center'>
      {items.map((item, index) => (
        <div className="skeleton-loader portfolio__item">
        <div className="skeleton skeleton-image"></div>
        <div className="skeleton skeleton-text skeleton-title"></div>
        <div className="skeleton skeleton-text skeleton-details"></div>
        <div className="skeleton skeleton-buttons">
        <div className="skeleton skeleton-button"></div>
        <div className="skeleton skeleton-button"></div>
        </div>
    </div>
      ))}
    </div>
  )
}

export default LoadingState