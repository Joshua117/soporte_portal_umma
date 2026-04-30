---
title: Ajustes
sidebar_position: 1
hide_table_of_contents: true
---

import React, { useState } from 'react';
import IphoneWrapper from '@site/src/components/IphoneWrapper';

export const ArrowSlider = () => {
  const [index, setIndex] = useState(0);
  
  const media = [
    { type: 'image', src: '/img/Cobranza/AgregarCaj.jpg' },
    { type: 'image', src: '/img/Cobranza/Cajas.jpg' },
    { type: 'image', src: '/img/Cobranza/TipoTra.jpg' },
    { type: 'image', src: '/img/Cobranza/TipoPag.jpg' },
  ];

  const siguienteImagen = () => {
    setIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const anteriorImagen = () => {
    setIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const botonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      
      <button onClick={anteriorImagen} style={{ ...botonStyle, left: '-10px' }} aria-label="Anterior">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>

      <IphoneWrapper>
        <img 
          src={media[index].src} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          alt="Contenido Cobranza" 
        />
      </IphoneWrapper>

      <button onClick={siguienteImagen} style={{ ...botonStyle, right: '-10px' }} aria-label="Siguiente">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>

      {/* Indicadores de puntos */}
      <div style={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px' }}>
        {media.map((_, i) => (
          <div key={i} style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: i === index ? 'var(--ifm-color-primary)' : 'rgba(0, 0, 0, 0.2)',
          }}/>
        ))}
      </div>
    </div>
  );
};

{/* Contenedor Adaptable */}
<div style={{ 
  display: 'flex', 
  flexWrap: 'wrap-reverse', 
  gap: '40px', 
  padding: '10px 20px',
  alignItems: 'flex-start'
}}>

  <div style={{ flex: '1 1 400px' }}> 

    Este apartado agrupa las funciones necesarias para administrar la operatividad financiera y de atención al cliente de la institución.

    ### Tipos de Trámites
    Este módulo permite gestionar el catálogo de servicios que la institución ofrece.

    * **Gestión de Estados:** Permite habilitar o deshabilitar servicios según la temporada.
    * **Creación de Trámites:** Captura el nombre del trámite y su subtipo.

    ---

    ### Métodos de Pago
    Define las formas en que los usuarios pueden realizar sus pagos.

    * **Flexibilidad:** Incluye Efectivo y Tarjeta por defecto, pero permite agregar nuevos métodos fácilmente.
    * **Integración:** Se reflejan automáticamente al agendar citas.

    ---

    ### Administración de Cajas
    Asegura que cada punto de atención esté correctamente estructurado asignando: personal, horarios y capacidades de trámite.

    ---

    ### Ajustes de Citas
    Configura la lógica de flujo de las citas y la experiencia en la sala de espera (contenido multimedia y mensajes).

  </div>

  {/* Columna del Slider - Estática y Arriba en móvil */}
  <div style={{ 
    flex: '0 0 auto', 
    margin: '0 auto 40px auto', /* Margen inferior para que no pegue con el texto en móvil */
    position: 'relative' 
  }}>
    <ArrowSlider />
  </div>

</div>