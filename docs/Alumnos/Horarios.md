---
sidebar_label: Horarios
sidebar_position: 2
hide_table_of_contents: true
---

import React, { useState } from 'react';
import IphoneWrapper from '@site/src/components/IphoneWrapper';

export const ArrowSlider = () => {
  const [index, setIndex] = useState(0);
  
  const media = [
    { type: 'image', src: '/img/Alumnos/Horario.webp' },
    { type: 'image', src: '/img/Alumnos/Horario1.webp' },
    { type: 'image', src: '/img/Alumnos/Horario2.webp' },
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

  En este módulo podrás **crear y organizar tu horario de clases** para el semestre de forma rápida, sencilla e intuitiva. 

### ¿Qué información podrás consultar en tu horario?
Una vez configurado, tu horario te permitirá visualizar todos los detalles clave de tu jornada académica en un solo lugar:

* **Materias:** Lista completa de las asignaturas que cursarás.
* **Docentes:** Nombre del profesor o profesora asignado a cada clase.
* **Días y Horarios:** Días lectivos y el bloque de tiempo (hora de inicio y fin) para cada sesión.
* **Salón:** Aula o laboratorio asignado para impartir la materia.

---

### Pasos para crear tu Horario
Armar tu horario escolar solo te tomará un par de minutos. Sigue estos sencillos pasos:

1. **Accede al menú:** Haz clic en el menú principal (icono de las tres líneas en la parte superior).
2. **Selecciona la opción:** Haz clic en **Crear Horario**.
3. **Elige tus materias:** Selecciona con un clic todas las asignaturas que te corresponde cursar durante el semestre.
4. **Guarda los cambios:** Haz clic en el botón de **Guardar** para confirmar tu selección.

> **¡Listo!** A partir de ese momento, cada vez que ingreses a tu portal universitario podrás visualizar tu horario activo con todas tus materias y salones actualizados.


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