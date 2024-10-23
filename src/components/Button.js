// src/components/Button.js
import React from 'react';

const Button = ({ text, type = 'submit' }) => {
  return <button type={type}>{text}</button>;
};

export default Button;
