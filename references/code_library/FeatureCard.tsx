import React from 'react';
import { Card } from './Card';
import { Typography } from './Typography';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  iconSize?: number;
  className?: string;
}

export function FeatureCard({ 
  icon, 
  title, 
  description, 
  iconSize = 64,
  className 
}: FeatureCardProps) {
  return (
    <Card className={className}>
      <div style={{ 
        display: 'flex', 
        gap: '16px',
        alignItems: 'center'
      }}>
        <img 
          src={icon} 
          alt="" 
          style={{ 
            width: `${iconSize}px`, 
            height: `${iconSize}px`, 
            objectFit: 'contain', 
            flexShrink: 0 
          }}
        />
        <div style={{ flex: 1 }}>
          <Typography 
            variant="body-m" 
            color="primary"
            style={{ 
              fontSize: '15px', 
              lineHeight: '20px', 
              fontWeight: '700', 
              marginBottom: '4px' 
            }}
          >
            {title}
          </Typography>
          <Typography 
            variant="body-m" 
            color="secondary"
            style={{ 
              fontSize: '15px', 
              lineHeight: '20px' 
            }}
          >
            {description}
          </Typography>
        </div>
      </div>
    </Card>
  );
}
