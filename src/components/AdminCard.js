import React from 'react';

export default function AdminCard({ title, href, iconPath }) {
  return (
    <a href={href} className="card-total">
      {/* La ruta coincide exactamente con @site/src/components/Icons/ + el nombre del archivo */}
      <img 
        src={require(`@site/src/components/Icons/${iconPath}`).default} 
        className="icon-admin-svg" 
        alt={title}
      />
      <h3>{title}</h3>
    </a>
  );
}