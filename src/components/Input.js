// src/components/Input.js
import React from 'react';

const Input = ({ label, name, value, onChange, type = 'text' }) => {
  return (
    <div>
      <label>{label}</label>
      <input 
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default Input;
