---
title: Ajustes Cobranza
sidebar_position: 2
hide_table_of_contents: true
---

import React, { useState } from 'react';
import IphoneWrapper from '@site/src/components/IphoneWrapper';

export const ArrowSlider = () => {
  const [index, setIndex] = useState(0);
  
  const media = [
    { type: 'image', src: '/img/Cobranza/Cajas.webp' },
    { type: 'image', src: '/img/Cobranza/TipoTra.webp' },
    { type: 'image', src: '/img/Cobranza/TipoPag.webp' },
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

<div className="container margin-vert--lg padding-horiz--lg">
  <div className="row">

    {/* Columna de Texto */}
    <div className="col col--7">
      Este apartado agrupa las funciones clave para **administrar la operatividad financiera y la atención al cliente** dentro de la institución, centralizando los servicios, canales de cobro y puntos de atención.

      ### Tipos de Trámites
      Este módulo permite gestionar el **catálogo de servicios institucionales**, facilitando la clasificación, identificación y control de cada solicitud realizada por los usuarios:

      * **Gestión de Estados:** Permite habilitar o deshabilitar servicios de forma dinámica según la disponibilidad operativa o temporada académica.
      * **Creación de Trámites:** Facilita el alta de nuevos conceptos mediante la captura del nombre oficial del trámite y su correspondiente subtipo.

      ---

      ### Métodos de Pago
      Define las distintas **opciones de cobro disponibles**, adaptándose a las necesidades de los usuarios y a los requerimientos de cada trámite:

      * **Flexibilidad:** Incluye opciones base como *Efectivo* y *Tarjeta*, con la posibilidad de incorporar rápidamente nuevas alternativas de pago.
      * **Integración Operativa:** Los métodos activos se reflejan de forma automática al momento de agendar citas o procesar solicitudes.

      ---

      ### Administración de Cajas
      Garantiza que cada punto de atención opere de manera estructurada, eficiente y supervisada mediante la asignación de:

      * **Personal y Horarios:** Identificación clara de las cajeras o cajeros en turno y sus horarios de atención establecidos.
      * **Disponibilidad en Tiempo Real:** Monitoreo del estatus activo de cada caja y control del flujo de usuarios atendidos.
      * **Capacidad de Trámites:** Configuración específica de los tipos de trámites y pagos habilitados para procesarse en cada ventanilla.

      > **Propósito del Módulo:** Optimizar la gestión de ingresos, reducir tiempos de espera en ventanilla y mantener la trazabilidad completa del flujo financiero y de atención al usuario.
    </div>

    {/* Columna del Slider - Con Sticky para acompañar el scroll */}
    <div className="col col--5" style={{ position: 'sticky', top: '100px', height: 'fit-content' }}>
      <ArrowSlider />
    </div>

  </div>
</div>