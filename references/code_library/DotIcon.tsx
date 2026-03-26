import React from 'react';

interface DotIconProps {
  size?: number;
  color?: string;
}

export function DotIcon({ 
  size = 20, 
  color = 'rgba(3, 3, 6, 0.88)'
}: DotIconProps) {
  return (
    <span 
      style={{ 
        fontSize: `${size}px`,
        color: color,
        lineHeight: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}
    >
      •
    </span>
  );
}
