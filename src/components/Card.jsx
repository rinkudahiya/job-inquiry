import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={`form-card ${className}`}>
      {children}
    </div>
  );
};

export default Card;
