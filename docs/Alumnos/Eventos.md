---
sidebar_label: Eventos
sidebar_position: 2
hide_table_of_contents: true
---
import React, { useState } from 'react';
import IphoneWrapper from '@site/src/components/IphoneWrapper';

export const ArrowSlider = () => {
  const [index, setIndex] = useState(0);
  
  const media = [
    { type: 'image', src: '/img/Alumnos/Evento.webp' },
    { type: 'image', src: '/img/Alumnos/Evento1.webp' },
    { type: 'image', src: '/img/Alumnos/Evento2.webp' },
    { type: 'image', src: '/img/Alumnos/Evento3.webp' },
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

En este apartado podrás consultar la **cartelera de eventos institucionales** de la universidad y asegurar tu lugar en las actividades que más te interesen.

### ¿Qué información puedes consultar de cada evento?
Antes de registrarte, el catálogo te permite revisar todos los detalles importantes para que organices tu agenda:

* **¿Dónde será?:** Ubicación y lugar exacto del campus o sede donde se llevará a cabo.
* **¿A qué hora?:** Fecha precisa, hora de inicio y duración de la actividad.
* **¿Cuántas horas te da?:** Cantidad de **horas complementarias** que sumarás a tu expediente escolar al asistir.
* **Tipo de evento:** Identifica si se trata de una actividad *Cultural* o *Académica*.

---

### ¿Cómo registrarte y apartar tu lugar?
Asegurar tu entrada es muy sencillo y te tomará solo un par de clics:

1. **Inscripción directa:** Confirma tu asistencia desde el botón de registro del evento.
2. **Obtén tu Boleto Digital:** El sistema generará automáticamente un **boleto con un código único**.

> **¡Importante!** Guarda tu boleto digital en tu celular. Deberás presentarlo el día del evento para registrar tu acceso y asegura r que tus horas complementarias se acrediten correctamente.

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