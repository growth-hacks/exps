import React from 'react';

interface ProgressCircleProps {
  number: number;
  size?: number;
  progress?: number; // 0-100
}

export function ProgressCircle({ 
  number, 
  size = 64,
  progress = 0 
}: ProgressCircleProps) {
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div style={{ 
      width: `${size}px`, 
      height: `${size}px`, 
      position: 'relative',
      flexShrink: 0
    }}>
      <svg
        width={size}
        height={size}
        style={{ 
          transform: 'rotate(-90deg)',
          position: 'absolute',
          top: 0,
          left: 0
        }}
      >
        {/* Background circle - dashed */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#E1E3E6"
          strokeWidth={strokeWidth}
          strokeDasharray="4 4"
        />
        
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#EF3124"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            transition: 'stroke-dashoffset 0.3s ease'
          }}
        />
      </svg>

      {/* Number */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '22px',
        lineHeight: '26px',
        fontWeight: '700',
        color: 'rgba(3, 3, 6, 0.88)'
      }}>
        {number}
      </div>
    </div>
  );
}