---
title: Citas Cobranza
sidebar_position: 1
hide_table_of_contents: true
---

import React, { useState } from 'react';
import IphoneWrapper from '@site/src/components/IphoneWrapper';

export const ArrowSlider = () => {
  const [index, setIndex] = useState(0);
  
  const media = [
    { type: 'image', src: '/img/Alumnos/Cobranza.png' },
    { type: 'image', src: '/img/Alumnos/AgendarCita.png' },
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
    <div style={{ position: 'sticky', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      
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

Este apartado permite visualizar el flujo de atención programada en el departamento de cobranza. Su objetivo principal es ofrecer transparencia sobre el orden de las citas y el estado de la fila, permitiendo a los usuarios planificar mejor su llegada.

### Monitoreo del Flujo de Atención
* **Visualización de Citas:** Permite consultar las citas asignadas para conocer el orden de atención, el turno asignado y el estado general de la fila.
* **Planeación:** Facilita la toma de decisiones al permitir verificar si existe saturación en el departamento antes de acudir presencialmente.

---

## Agendar Cita
Este módulo facilita la programación de espacios de atención sin necesidad de desplazamientos innecesarios, permitiendo gestionar el tiempo de forma eficiente.

### Pasos para programar una cita:

1. **Acceso al módulo:** En la pantalla principal de Cobranza, localiza y selecciona el botón ubicado en la esquina inferior derecha.
2. **Consulta de disponibilidad:** El sistema mostrará un calendario interactivo donde podrás distinguir claramente:
    * **Días ocupados:** Fechas con cupo lleno.
    * **Días disponibles:** Fechas con espacio para agendar.
3. **Selección de detalles:** Una vez elegido el día, procede a completar los datos requeridos:
    * **Fecha y Hora:** Selección del horario más conveniente.
    * **Propósito de la cita:** Breve descripción del motivo por el cual solicitas la atención.
4. **Confirmación:** Finaliza el proceso y asegúrate de recibir la confirmación.


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