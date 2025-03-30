import React from 'react';

const Input = ({ name, type = 'text', value, onChange, placeholder, required }) => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="input-field"
    />
  );
};

export default Input;
