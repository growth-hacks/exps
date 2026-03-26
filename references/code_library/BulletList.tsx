import React from 'react';
import { Typography } from './Typography';
import { DotIcon } from './DotIcon';

interface BulletListProps {
  items: string[];
  className?: string;
}

export function BulletList({ items, className = '' }: BulletListProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }} className={className}>
      {items.map((item, index) => (
        <div key={index} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <DotIcon size={16} />
          <Typography variant="body-m" color="primary">
            {item}
          </Typography>
        </div>
      ))}
    </div>
  );
}