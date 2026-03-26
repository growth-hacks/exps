import React from 'react';

interface CardProps {
  children: React.ReactNode;
  padding?: string;
  className?: string;
}

export function Card({ 
  children, 
  padding = '16px',
  className = '' 
}: CardProps) {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '32px',
        padding: padding,
      }}
      className={className}
    >
      {children}
    </div>
  );
}
