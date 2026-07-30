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
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    border: 'none',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 20,
    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
    transition: 'background-color 0.3s ease',
  };

  const FlechaIzquierda = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
  );

  const FlechaDerecha = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
  );

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '320px', margin: '0 auto' }}>
      
      <button 
        onClick={anteriorImagen} 
        style={{ ...botonStyle, left: '-15px' }}
        aria-label="Anterior"
      >
        <FlechaIzquierda />
      </button>

      <IphoneWrapper>
        <img 
          src={media[index].src} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          alt="Control de asistencias" 
        />
      </IphoneWrapper>

      <button 
        onClick={siguienteImagen} 
        style={{ ...botonStyle, right: '-15px' }}
        aria-label="Siguiente"
      >
        <FlechaDerecha />
      </button>

      <div style={{ position: 'absolute', bottom: '-22px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 10 }}>
        {media.map((_, i) => (
          <div key={i} style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: i === index ? 'var(--ifm-color-primary)' : 'rgba(0, 0, 0, 0.25)',
            transition: 'all 0.3s ease'
          }}/>
        ))}
      </div>
    </div>
  );
};

{/* Contenedor Adaptable */}
<div className="responsive-container">

  {/* Columna del Slider */}
  <div className="slider-column">
    <ArrowSlider />
  </div>

  {/* Columna de Texto con HTML puro para listas */}
  <div className="text-column">

<p>Este módulo es la herramienta principal para el monitoreo de la puntualidad y el cumplimiento de la carga horaria del profesorado. Permite a la administración tener un registro detallado de la operatividad diaria en las aulas, garantizando que el servicio educativo se imparta conforme a la planeación.</p>

<h3 style={{ marginTop: '15px', marginBottom: '5px' }}>Detalle de los Registros</h3>
<p>Cada entrada en este módulo proporciona una radiografía completa de la actividad docente en cada sesión de clase:</p>

<ul>
  <li><strong>Información General:</strong> Fecha de la clase y Asignatura impartida.</li>
  <li><strong>Estado de Asistencia:</strong> Indica si el docente Asistió o Faltó a la sesión programada.</li>
</ul>

<h4 style={{ marginTop: '12px', marginBottom: '5px' }}>Control Horario</h4>

<ul>
  <li><strong>Horario Asignado:</strong> El bloque de tiempo estipulado para la materia.</li>
  <li><strong>Registro de Entrada y Salida:</strong> Tiempos reales en los que el docente marcó su actividad.</li>
  <li><strong>Retardos:</strong> Registro automático en caso de que el docente exceda el tiempo de tolerancia para el inicio de la clase.</li>
</ul>

<h4 style={{ marginTop: '12px', marginBottom: '5px' }}>Gestión de Reposiciones</h4>
<p>El sistema ofrece un apartado especial para la programación y recuperación de clases. Este módulo permite al docente gestionar inasistencias de manera anticipada y coordinar la recuperación de horas lectivas mediante los siguientes pasos:</p>

<ul>
  <li><strong>Notificación de Inasistencia:</strong> Aviso previo generado por el docente indicando el día en que no podrá impartir la clase.</li>
  <li><strong>Programación de Fecha:</strong> Registro del día y horario en que se llevará a cabo la recuperación de la sesión.</li>
  <li><strong>Proceso de Aprobacion:</strong> Una vez aprobada la reposición, se enviará una notificación automática al correo institucional del docente.</li>
</ul>

<h3 style={{ marginTop: '15px', marginBottom: '5px' }}>Propósito del Módulo</h3>
<p>La consolidación y automatización de estos registros permite a la institución:</p>

<ul>
  <li><strong>Garantizar el Cumplimiento Académico:</strong> Asegurar la cobertura total del temario y las horas de clase estipuladas en el plan de estudios.</li>
  <li><strong>Optimizar la Gestión Institucional:</strong> Agilizar la coordinación de horarios, aulas y avisos a los alumnos ante cualquier ajuste en el calendario.</li>
  <li><strong>Mantener la Transparencia:</strong> Proporcionar un historial objetivo y accesible de asistencia, retardos e incidencias para el docente y la administración.</li>
</ul>

  </div>

</div>

{/* CSS Responsivo */}
<style>{`
  .responsive-container {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    padding: 0px 10px;
    align-items: flex-start;
  }

  .text-column {
    flex: 1 1 400px;
    margin-top: -20px;
  }

  .slider-column {
    flex: 0 0 320px;
    margin: 0 auto;
    position: relative;
  }

  @media (min-width: 769px) {
    .text-column {
      order: 1;
    }
    .slider-column {
      order: 2;
      position: sticky;
      top: 100px;
    }
  }

  @media (max-width: 768px) {
    .responsive-container {
      padding: 0px 5px;
      gap: 30px;
    }
    .slider-column {
      order: 1;
      margin-bottom: 25px;
      width: 100%;
    }
    .text-column {
      order: 2;
      margin-top: 0;
    }
  }
`}
</style>