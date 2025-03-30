import React from 'react';

const Slider = ({ min, max, step, value, onChange, className }) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
      className={`slider-track ${className}`}
    />
  );
};

export default Slider;
