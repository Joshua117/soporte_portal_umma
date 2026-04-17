import React from 'react';

// Intentamos requerir el icono, pero con una gestión de errores básica
export default function AdminCard({ title, iconName, link }) {
  let icon = null;
  try {
    // Usamos el alias @site para asegurar que siempre encuentre la carpeta
    icon = require(`@site/src/components/Icons/${iconName}`).default;
  } catch (e) {
    console.error(`No se encontró el icono: ${iconName}`);
  }
  
  return (
    <div className="card-total" onClick={() => window.location.href = link}>
      {icon && <img src={icon} alt={title} className="icon-admin-svg" />}
      <h3>{title}</h3>
    </div>
  );
}