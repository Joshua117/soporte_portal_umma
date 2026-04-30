import React from 'react';
import Link from '@docusaurus/Link';

export default function AdminCard({ title, iconName, link }) {
  let icon = null;
  
  try {
    icon = require(`@site/src/components/Icons/${iconName}`).default;
  } catch (e) {
    console.error(`Error cargando icono: ${iconName}`, e);
  }

  return (
    <Link to={link} className="card-total" style={{ textDecoration: 'none' }}>
      {/* Añadimos card-content para manejar el alineamiento interno */}
      <div className="card-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {icon ? (
          <img 
            src={icon} 
            alt={title} 
            className="icon-admin-svg" 
            loading="lazy"
          />
        ) : (
          <div className="icon-placeholder" style={{ width: '45px', height: '45px' }} />
        )}
        <h3>{title}</h3>
      </div>
    </Link>
  );
}