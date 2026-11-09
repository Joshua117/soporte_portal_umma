
import React from 'react';
import Link from '@docusaurus/Link';
import Icono from '@site/src/components/Iconos';

interface CardItem {
  title: string;
  to: string;
  icon?: string;
}

interface CardGridProps {
  items: CardItem[];
}

export function CardGrid({ items }: CardGridProps) {
  return (
    <div className="umma-cards-grid">
      {items.map((item, index) => (
        <Link key={index} to={item.to} className="umma-card">
          <div className="umma-card-left">
            <div className="umma-icon-circle">
              <Icono
                nombre={item.icon || 'school'}
                size={36}
              />
            </div>
            <span className="umma-card-title">{item.title}</span>
          </div>

          <div className="umma-arrow-circle">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </Link>
      ))}
    </div>
  );
}
