import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  fullWidth = false
}: ButtonProps) {
  const baseStyles = {
    height: '56px',
    borderRadius: '16px',
    fontSize: '17px',
    lineHeight: '24px',
    fontWeight: '700',
    transition: 'opacity 0.2s',
    border: 'none',
    cursor: 'pointer',
    width: fullWidth ? '100%' : 'auto',
    padding: '0 24px',
    minWidth: '44px',
  };

  const variantStyles = {
    primary: {
      backgroundColor: '#000000',
      color: '#FFFFFF',
    },
    secondary: {
      backgroundColor: '#FFFFFF',
      color: 'rgba(3, 3, 6, 0.88)',
      border: '1px solid #E1E3E6',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: '#EF3124',
    },
  };

  return (
    <button
      style={{
        ...baseStyles,
        ...variantStyles[variant],
      }}
      className={className}
      onClick={onClick}
      onMouseDown={(e) => {
        e.currentTarget.style.opacity = '0.8';
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.opacity = '1';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = '1';
      }}
      onTouchStart={(e) => {
        e.currentTarget.style.opacity = '0.8';
      }}
      onTouchEnd={(e) => {
        e.currentTarget.style.opacity = '1';
      }}
    >
      {children}
    </button>
  );
}