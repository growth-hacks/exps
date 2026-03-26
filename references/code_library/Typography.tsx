import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'body-l' | 'body-m';
  color?: 'primary' | 'secondary' | 'inverted';
  className?: string;
  style?: React.CSSProperties;
}

const variantStyles = {
  h1: {
    fontSize: '28px',
    lineHeight: '34px',
    fontWeight: '700',
    letterSpacing: '-0.02em',
  },
  h2: {
    fontSize: '24px',
    lineHeight: '28px',
    fontWeight: '700',
  },
  h3: {
    fontSize: '22px',
    lineHeight: '26px',
    fontWeight: '700',
  },
  'body-l': {
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: '400',
  },
  'body-m': {
    fontSize: '17px',
    lineHeight: '24px',
    fontWeight: '400',
  },
};

const colorStyles = {
  primary: 'rgba(3, 3, 6, 0.88)',
  secondary: 'rgba(4, 4, 19, 0.55)',
  inverted: '#FFFFFF',
};

export function Typography({ 
  children, 
  variant = 'body-m', 
  color = 'primary',
  className = '',
  style = {}
}: TypographyProps) {
  const Tag = variant.startsWith('h') ? variant : 'p';

  return React.createElement(
    Tag,
    {
      style: {
        ...variantStyles[variant],
        color: colorStyles[color],
        ...style,
      },
      className,
    },
    children
  );
}
