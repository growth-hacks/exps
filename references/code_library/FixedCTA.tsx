import React from 'react';
import { Button } from './Button';

interface FixedCTAProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
}

export function FixedCTA({ 
  children, 
  onClick,
  variant = 'primary'
}: FixedCTAProps) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '16px 20px',
        paddingBottom: 'calc(16px + env(safe-area-inset-bottom))',
        backgroundColor: '#F2F3F5',
        borderTop: '1px solid #E1E3E6',
      }}
    >
      <div style={{ maxWidth: '375px', margin: '0 auto' }}>
        <Button 
          variant={variant}
          onClick={onClick}
          fullWidth
        >
          {children}
        </Button>
      </div>
    </div>
  );
}
