
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ArrowLeftRight } from 'lucide-react';

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeLabel = 'До',
  afterLabel = 'После',
  initialPosition = 50,
  className = '',
}) => {
  const [sliderPosition, setSliderPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const newPosition = ((e.clientX - containerRect.left) / containerRect.width) * 100;
      setSliderPosition(Math.max(0, Math.min(100, newPosition)));
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging && containerRef.current && e.touches[0]) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const newPosition = ((e.touches[0].clientX - containerRect.left) / containerRect.width) * 100;
      setSliderPosition(Math.max(0, Math.min(100, newPosition)));
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-lg ${className}`}
      style={{ height: '400px', cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {/* Before Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${beforeImage})`,  }}
      >
        <div className="absolute bottom-6 right-6 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-medium">
          {beforeLabel}
        </div>
      </div>

      {/* After Image */}
      <div
        className="absolute top-0 left-0 h-full bg-cover bg-center"
        style={{
          width: `${sliderPosition}%`,
          backgroundImage: `url(${afterImage})`,
          clipPath: `inset(0 0 0 0)`
        }}
      >
        <div className="absolute bottom-6 left-6 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-medium">
          {afterLabel}
        </div>
      </div>

      {/* Slider control */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-md cursor-ew-resize"
        style={{
          left: `calc(${sliderPosition}% - 0.5px)`,
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center"
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <ArrowLeftRight className="w-5 h-5 text-blue-600" />
        </div>
      </div>
    </div>
  );
};

BeforeAfterSlider.propTypes = {
  beforeImage: PropTypes.string.isRequired,
  afterImage: PropTypes.string.isRequired,
  beforeLabel: PropTypes.string,
  afterLabel: PropTypes.string,
  initialPosition: PropTypes.number,
  className: PropTypes.string,
};

export default BeforeAfterSlider;