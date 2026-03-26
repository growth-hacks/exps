import React from 'react';

interface CircleIconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export function CircleIcon({ 
  size = 20, 
  color = 'rgba(3, 3, 6, 0.88)',
  strokeWidth = 2
}: CircleIconProps) {
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <circle
        cx={center}
        cy={center}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
    </svg>
  );
}
