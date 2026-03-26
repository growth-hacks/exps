import React from 'react';
import { Card } from './Card';
import { Typography } from './Typography';

interface IconCardProps {
  iconSrc?: string;
  text: string;
  iconSize?: number;
  minHeight?: string;
  className?: string;
}

/**
 * IconCard Component
 * 
 * A centered card with an icon and descriptive text below it.
 * Used for displaying features, benefits, or issues in a grid layout.
 * 
 * @param iconSrc - URL of the icon image (default: placeholder)
 * @param text - Text content to display below the icon
 * @param iconSize - Size of the icon in pixels (default: 96)
 * @param minHeight - Minimum height of the card content (default: '160px')
 * @param className - Optional additional classes
 * 
 * @example
 * <IconCard 
 *   iconSrc="https://placehold.co/96x96/F2F3F5/030306?text=Icon"
 *   text="при подтверждении дохода"
 * />
 */
export function IconCard({ 
  iconSrc = 'https://placehold.co/96x96/F2F3F5/030306?text=Icon',
  text, 
  iconSize = 96,
  minHeight = '160px',
  className = ''
}: IconCardProps) {
  return (
    <Card padding="12px" className={className}>
      <div className="flex flex-col items-center text-center" style={{ minHeight }}>
        <img 
          src={iconSrc} 
          alt="" 
          className="object-contain mb-[8px]"
          style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
        />
        <Typography variant="body-m" color="primary" style={{ fontSize: '15px', lineHeight: '20px' }}>
          {text}
        </Typography>
      </div>
    </Card>
  );
}
