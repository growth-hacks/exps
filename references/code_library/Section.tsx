import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  paddingX?: string;
  paddingTop?: string;
  paddingBottom?: string;
  className?: string;
}

export function Section({ 
  children, 
  paddingX = '20px',
  paddingTop = '32px',
  paddingBottom = '32px',
  className = ''
}: SectionProps) {
  return (
    <section
      style={{
        paddingLeft: paddingX,
        paddingRight: paddingX,
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
      }}
      className={className}
    >
      {children}
    </section>
  );
}
