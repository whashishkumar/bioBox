'use client';
import React from 'react';
import './style.css';

export default function Button({
  text,
  type = 'button',
  onClick,
  disabled = false,
  variant = 'primary', // 'primary', 'secondary', 'outline'
  size = 'md', // 'sm', 'md', 'lg'
  className = '',
  icon, // React component like <FaPlus />
  iconPosition = 'left', // 'left' or 'right'
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`ui-btn ${variant} ${size} ${
        disabled ? 'disabled' : ''
      } ${className}`}
    >
      {icon && iconPosition === 'left' && (
        <span className="btn-icon left">{icon}</span>
      )}
      {text}
      {icon && iconPosition === 'right' && (
        <span className="btn-icon right">{icon}</span>
      )}
    </button>
  );
}
