---
title: Control de asistencias
sidebar_position: 2
hide_table_of_contents: true
---

import Link from '@docusaurus/Link'; 
import React, { useState } from 'react';
import IphoneWrapper from '@site/src/components/IphoneWrapper';

export const ArrowSlider = () => {
  const [index, setIndex] = useState(0);
  
  const media = [
    { type: 'image', src: '/img/Docentes/AsistenciaDoc.png' },
    { type: 'image', src: '/img/Docentes/RegistrarFaltaDoc.png' }

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
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    transition: 'background-color 0.3s ease',
  };

  const FlechaIzquierda = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
  );

  const FlechaDerecha = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
  );

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden', borderRadius: '12px' }}>
      
      <button 
        onClick={anteriorImagen} 
        style={{ ...botonStyle, left: '10px' }}
        aria-label="Anterior"
      >
        <FlechaIzquierda />
      </button>

      <IphoneWrapper>
        <img 
          src={media[index].src} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          alt="Contenido Cobranza" 
        />
      </IphoneWrapper>

      <button 
        onClick={siguienteImagen} 
        style={{ ...botonStyle, right: '10px' }}
        aria-label="Siguiente"
      >
        <FlechaDerecha />
      </button>

      <div style={{ position: 'absolute', bottom: '15px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 10 }}>
        {media.map((_, i) => (
          <div key={i} style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: i === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
          }}/>
        ))}
      </div>
    </div>
  );
};

<div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '70px', paddingLeft: '50px', alignItems: 'start' }}>

  <div> 

Este módulo es la herramienta principal para el monitoreo de la puntualidad y el cumplimiento de la carga horaria del profesorado. Permite a la administración tener un registro detallado de la operatividad diaria en las aulas, garantizando que el servicio educativo se imparta conforme a la planeación.

### Detalle de los Registros
Cada entrada en este módulo proporciona una radiografía completa de la actividad docente en cada sesión de clase:

* **Información General:** Fecha de la clase y Asignatura impartida.
* **Estado de Asistencia:** Indica si el docente Asistió o Faltó a la sesión programada.

#### Control Horario
* **Horario Asignado:** El bloque de tiempo estipulado para la materia.
* **Registro de Entrada y Salida:** Tiempos reales en los que el docente marcó su actividad.
* **Retardos:** Registro automático en caso de que el docente exceda el tiempo de tolerancia para el inicio de la clase.

#### Gestión de Reposiciones
El sistema ofrece un apartado especial para la programación y recuperación de clases. Este módulo permite al docente gestionar inasistencias de manera anticipada y coordinar la recuperación de horas lectivas mediante los siguientes pasos:

* **Notificación de Inasistencia:** Aviso previo generado por el docente indicando el día en que no podrá impartir la clase.
* **Programación de Fecha:** Registro del día y horario en que se llevará a cabo la recuperación de la sesión.
* **Proceso de Aprobacion:** Una vez aprobada la reposición, se enviará una notificación automática al correo institucional del docente.

### Propósito del Módulo
La consolidación y automatización de estos registros permite a la institución:

* **Garantizar el Cumplimiento Académico:** Asegurar la cobertura total del temario y las horas de clase estipuladas en el plan de estudios.
* **Optimizar la Gestión Institucional:** Agilizar la coordinación de horarios, aulas y avisos a los alumnos ante cualquier ajuste en el calendario.
* **Mantener la Transparencia:** Proporcionar un historial objetivo y accesible de asistencia, retardos e incidencias para el docente y la administración.

</div>

  <div style={{ width: '300px', position: 'sticky', top: '100px' }}>
    <ArrowSlider />
  </div>

</div>