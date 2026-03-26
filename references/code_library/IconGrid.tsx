import React from 'react';
import { IconCard } from './IconCard';

interface IconGridItem {
  iconSrc?: string;
  text: string;
}

interface IconGridProps {
  items: IconGridItem[];
  columns?: 2 | 3 | 4;
  iconSize?: number;
  minHeight?: string;
  gap?: string;
}

/**
 * IconGrid Component
 * 
 * A responsive grid layout for displaying multiple IconCard components.
 * Typically used in 2x2 layout for mobile (375px width).
 * 
 * @param items - Array of objects with iconSrc and text
 * @param columns - Number of columns in the grid (default: 2)
 * @param iconSize - Size of icons in pixels (default: 96)
 * @param minHeight - Minimum height of each card (default: '160px')
 * @param gap - Gap between grid items (default: '16px')
 * 
 * @example
 * const items = [
 *   { iconSrc: 'icon1.png', text: 'при подтверждении дохода' },
 *   { iconSrc: 'icon2.png', text: 'при масштабировании деятельности' },
 *   { iconSrc: 'icon3.png', text: 'при работе с договорами' },
 *   { iconSrc: 'icon4.png', text: 'при требованиях платформ' }
 * ];
 * 
 * <IconGrid items={items} />
 */
export function IconGrid({ 
  items, 
  columns = 2,
  iconSize = 96,
  minHeight = '160px',
  gap = '16px'
}: IconGridProps) {
  return (
    <div 
      className="grid"
      style={{ 
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap 
      }}
    >
      {items.map((item, index) => (
        <IconCard 
          key={index}
          iconSrc={item.iconSrc}
          text={item.text}
          iconSize={iconSize}
          minHeight={minHeight}
        />
      ))}
    </div>
  );
}
